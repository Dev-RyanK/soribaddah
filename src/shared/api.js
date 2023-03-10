import axios from "axios"

export const DB = process.env.React_APP_DBSERVER
export const PUBLIC_URL = process.env.REACT_APP_PUBLIC_URL
export const REST_API_KEY = process.env.REACT_APP_REST_API_KEY
export const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI

export const api = axios.create({
  baseURL: DB,
  url: DB,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "content-type": "application/json; charset=UTF-8",
  },
  withCredentials: true,
})

export const apis = {
  /****** 회원가입 ******/
  signup: (loginId, password, nickname) =>
    api
      .post("/api/signup", {
        ...loginId,
        ...password,
        ...nickname,
      })
      .then((res) => {
        alert("가입 성공!")
      })
      .catch((err) => alert(err.response.data.msg)),

  /****** 로그인 ******/
  login: (loginId, password) => {
    /* const data = {loginId, password} */
    api
      .post("/api/login", { ...loginId, ...password })
      .then((res) => {
        localStorage.setItem("ACCESS_TOKEN", res.headers.accesstoken)
        localStorage.setItem("REFRESH_TOKEN", res.headers.refreshtoken)
        const { accessToken } = res.headers.accesstoken
        api.defaults.headers["AccessToken"] = accessToken
      })
      .catch((err) => alert(err.response.data.msg))
  },
  /****** 게시글 삭제 ******/
  delPost: (postId) => {
    api
      .delete(`/api/music/${postId}`, postId)
      .then((res) => alert(res.data.msg))
      .catch((err) => alert(err.response.data.msg))
  },

  /****** 게시글 수정 ******/
  patchPost: (postId, payload) => {
    api
      .patch(`/api/music/${postId}`, payload)
      .then((res) => {
        alert(res.data.msg)
      })
      .catch((err) => {
        alert(err.response.data.msg)
      })
  },

  /****** 댓글 작성 ******/
  postComment: (payload) => {
    api
      .post(`/api/comment/${payload}`)
      .then((res) => {
        alert("작성 완료!")
      })
      .catch((err) => {
        alert(err.response.data.msg)
      })
  },

  /* 카카오 로그인 */
  /* kakao: (kakaoCode) => {
    axios
      .post(`https://kauth.kakao.com/oauth/token`, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${kakaoCode}`,
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          localStorage.setItem("token", data.access_token)
        } else {
          // navigate("/")
          console.log("done")
        }
      })
  }, */
}

/****** Interceptor ******/
api.interceptors.request.use(function (config) {
  const token = localStorage.getItem("ACCESS_TOKEN")
  const rToken = localStorage.getItem("REFRESH_TOKEN")
  if (token === undefined) {
    config.headers["AccessToken"] = null
    config.headers["RefreshToken"] = null
    return config
  } else {
    config.headers["AccessToken"] = token
    config.headers["RefreshToken"] = rToken
    return config
  }
})

//AccessToken이 만료됐을때 처리
// 403일때?? 확정해서 if문 처리 (401은 로그아웃임)
/* api.interceptors.response.use(
  function (res) {
    return res
  },
  function (err) {
    if (
      err.response.status >= 400 ||
      err.headers["AccessToken"] === undefined
    ) {
      console.log(err)
      const token = localStorage.getItem("ACCESS_TOKEN") // 헌 토큰
      const rToken = localStorage.getItem("REFRESH_TOKEN")
      err.headers["AccessToken"] = token
      err.headers["RefreshToken"] = rToken
      return err
    }
    return Promise.reject(err)
  }
) */

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalReq = err.config
    if (
      // err.response.status === 403 &&
      err.response.status === 403 &&
      err.config /* && */
      // !err.config.__isRetryRequest
    ) {
      // 401 이고, err.config가 있고, retry reqeust가 아니면 토큰 만료라고 판단하여 refresh 요청
      // originalReq._retry = true
      // 만약 retry인 request가 401일 되면 위의 분기를 통해서 refresh하지 않는다.
      try {
        console.log("post")

        const res = await axios.post(`${DB}/api/music`, {
          AccessToken: localStorage.getItem("ACCESS_TOKEN"),
          RefreshToken: localStorage.getItem("REFRESH_TOKEN"),
        })
        const data = res.data

        console.log(data)

        localStorage.setItem("ACCESS_TOKEN", data.data.AccessToken)
        localStorage.setItem("REFRESH_TOKEN", data.data.RefreshToken)

        originalReq.headers.AccessToken = `${data.data.AccessToken}`

        return axios(originalReq)
      } catch (error) {
        console.log("get")

        // refresh 토큰도 만료되었거나 오류 발생 시
        // window.location.href = "/"
        // console.log(error)

        return Promise.reject(err)
      }
    }
    return Promise.reject(err)
  }
)

export default api
