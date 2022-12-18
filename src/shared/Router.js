import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Home from "../pages/Home"
import PostDetail from "../pages/PostDetail"
import Signup from "../pages/Signup"
import Login from "../pages/Login"

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
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default Router
