import axios from "axios"

export const DB = process.env.React_APP_DBSERVER

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

  /****** 댓글 작성 ******/
  postComment: (payload) => {
    api
      .post(`/api/comment/${payload}`)
      .then((res) => {
        console.log(res)
        alert("작성 완료!")
      })
      .catch((err) => {
        alert(err.response.data.msg)
      })
  },
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
api.interceptors.response.use(
  function (res) {
    return res
  },
  function (err) {
    const token = localStorage.getItem("ACCESS_TOKEN") // 헌 토큰
    const rToken = localStorage.getItem("REFRESH_TOKEN")
    err.headers["AccessToken"] = token
    err.headers["RefreshToken"] = rToken
    return err
  }
)

export default api
