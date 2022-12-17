import axios from "axios"

export const DB = process.env.React_APP_DBSERVER

const instance = axios.create({
  baseURL: DB,
  headers: {
    // "content-type": "application/json; charset=UTF-8",
    // 'Authorization':`${토큰}`
  },
})

const get = instance.get()

export default instance
