import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Home from "../pages/main/home/Home"
import PostDetail from "../pages/PostDetail"
import AddList from "../pages/main/Add/AddList"
import Login from "../pages/Login/Login"
import Signup from "../pages/Signup"
import HomeCardList from "../pages/main/home/HomeCardList"
import KakaoLogin from "../pages/Login/KakaoLogin"

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Routes>
          <Route>
            <Route path="/" element={<HomeCardList />} />
            <Route path="/music" element={<HomeCardList />} />
            <Route path="/AddList" element={<AddList />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="music/:id" element={<PostDetail />} />
            <Route path="/kakaoLogin" element={<KakaoLogin />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
