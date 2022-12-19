import axios from "axios"

// "http://localhost:3003"
// 129.154.54.69:8080
export const DB = process.env.React_APP_DBSERVER

export const instance = axios.create({
  baseURL: DB,
  headers: {
    "Access-Control-Allow-Origin": "*",
    // "content-type": "application/json; charset=UTF-8",
    // 'Authorization':`${토큰}`
  },
})

// 회원가입 폼 보내기
export const postSignupInstance = axios.create({
  baseURL: `${DB}/api`,
  headers: { "Access-Control-Allow-Origin": "*" },
})

// 로그인 하기
export const loginInstance = axios.create({
  baseURL: `${DB}/api`,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "content-type": "application/json; charset=UTF-8",
    Authorization: `Bearer asdfasdf`,
  },
})

// 전체 음악 API
export const postGetInstance = axios.create({
  baseURL: `${DB}/api/music`,
})

// 댓글 API
export const commentGetInstance = axios.create({
  baseURL: `${DB}/api/comment`,
})

// 인터셉터용
export const baseURL = axios.create({
  baseURL: DB,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
})

baseURL.interceptors.request.use((config) => {
  if (config.headers === undefined) return
  const token = localStorage.getItem("id")
  config.headers["Authorization"] = `${token}`
  return config
})

// 임시 GET
// 이렇게는 쓸 수 없다!
// query string 식으로는 안 돌아감
// export const postGetInstance = instance.get(`/music?musicId=`, param())

// export default instance
