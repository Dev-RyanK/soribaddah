import { configureStore } from "@reduxjs/toolkit"
import post from "../modules/postDetailSlice"
import signup from "../modules/signupSlice"
import toggle from "../modules/togglePageSlice"
import music from "../modules/todoSlice"

const store = configureStore({
  reducer: { post: post, signup: signup, toggle: toggle, music: music },
})

export default store
