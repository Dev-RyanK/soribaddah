import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../shared/Layout"
import Home from "../pages/Home"
import PostDetail from "../pages/PostDetail"

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Layout> */}
      {/* 헤더 */}
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          {/* 로그인 */}
          {/* 회원가입 */}
          <Route path="music/:id" element={<PostDetail />} />
        </Route>
      </Routes>
      {/* </Layout> */}
    </BrowserRouter>
  )
}

export default Router
