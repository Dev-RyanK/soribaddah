import axios from "axios"

// "http://localhost:3003"
export const DB = process.env.React_APP_DBSERVER

export const api = axios.create({
  baseURL: DB,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "content-type": "application/json; charset=UTF-8",
  },
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
        console.log(res.data)
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
        onLoginSuccess()
      })
      .catch((err) => alert(err.response.data.msg))
  },

  /****** 댓글 조회 (작업 중) ******/
  getComment: (payload) => {
    api.get(`/api/comment/${payload}`)
  },
}

/* export const onSilentRefresh = () => {
  axios
    .post("/api/silent-refresh")
    .then(onLoginSuccess)
    .catch((error) => {
      console.log(`${error.message}: 로그인이 실패하였습니다`)
    })
} */

// const JWT_EXPIRY_TIME = 24 * 3600 * 1000

export const onLoginSuccess = (res) => {
  const { accessToken } = res.headers.accesstoken

  // API 요청시마다 헤더에 accessToken 담아 보냄
  // axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`
  api.defaults.headers.common["Authorization"] = accessToken

  /* // accessToken 만료 1분 전 로그인 연장
  setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000) */
}

// 댓글 API
export const commentGetInstance = axios.create({
  baseURL: `${DB}/comment`,
})

api.interceptors.request.use(function (config) {
  const token = localStorage.getItem("ACCESS_TOKEN")
  const rToken = localStorage.getItem("REFRESH_TOKEN")
  if (!token) {
    config.headers["AccessToken"] = null
    config.headers["RefreshToken"] = null
    return config
    // } else if (token) {
  } else {
    config.headers["AccessToken"] = token
    config.headers["RefreshToken"] = rToken
    return config
  }
})

//AccessToken이 만료됐을때 처리
api.interceptors.response.use(
  function (response) {
    return response
  },
  async function (err) {
    const originalConfig = err.config

    if (err.response && err.response.status === 401) {
      const rToken = originalConfig.headers["RefreshToken"]
      try {
        const data = await axios({
          // url: `refreshtoken담아 보낼 URL`,
          url: DB,
          method: "GET",
          headers: {
            Authorization: rToken,
          },
        })
        if (data) {
          localStorage.setItem(
            "token",
            // JSON.stringify(data.data, ["AccessToken", "RefreshToken"])
            console.log(
              JSON.stringify(data.data, ["AccessToken", "RefreshToken"])
            )
          )
          return await api.request(originalConfig)
        }
      } catch (err) {
        console.log("토큰 갱신 에러")
      }
      return Promise.reject(err)
    }
    return Promise.reject(err)
  }
)

export default api
