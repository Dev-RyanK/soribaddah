import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Home from "../pages/Home"
import PostDetail from "../pages/PostDetail"

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            {/* 로그인 */}
            {/* 회원가입 */}
            <Route path="music/:id" element={<PostDetail />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default Router
