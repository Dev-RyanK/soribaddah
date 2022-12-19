import axios from "axios"
import { useParams } from "react-router-dom"

// "http://localhost:3003"
export const DB = process.env.React_APP_DBSERVER

export const instance = axios.create({
  baseURL: DB,
  headers: {
    "Access-Control-Allow-Origin": "*",
    // "content-type": "application/json; charset=UTF-8",
    // 'Authorization':`${토큰}`
  },
})

export const postSignupInstance = axios.create({
  baseURL: "http://192.168.4.212:8080/api",
  headers: { "Access-Control-Allow-Origin": "*" },
})

// query string 식으로는 안 돌아감
export const postGetInstance = axios.create({
  baseURL: `${DB}/music`,
})

export const commentGetInstance = axios.create({
  baseURL: `${DB}/comment`,
})

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
// export const postGetInstance = instance.get(`/music?musicId=`, param())

// export default instance
