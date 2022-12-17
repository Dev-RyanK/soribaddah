import { configureStore } from "@reduxjs/toolkit"
import post from "../modules/postDetailSlice"

const store = configureStore({
  reducer: { post: post },
})

export default store
