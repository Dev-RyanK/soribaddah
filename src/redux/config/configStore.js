import { configureStore } from "@reduxjs/toolkit"
import post from "../modules/postDetailSlice"
import signup from "../modules/signupSlice"
import toggle from "../modules/togglePageSlice"

const store = configureStore({
  reducer: { post: post, signup: signup, toggle: toggle },
})


export default store;
