import { configureStore } from "@reduxjs/toolkit";
import post from "../modules/postDetailSlice";
import music from "../modules/todoSlice";

const store = configureStore({
  reducer: { post: post, music: music },
});

export default store;
