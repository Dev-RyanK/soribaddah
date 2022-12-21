import React, { useState } from "react"
import styled from "styled-components"
import Input from "../components/elements/Input"
import Button from "../components/elements/Button"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { __postSignup } from "../redux/modules/signupSlice"
import classes from "./Login/Login.module.css"

const Signup = () => {
  const [info, setInfo] = useState({
    loginId: "apitest12",
    password: "asd123!@#",
    nickname: "apitTest01",
  })
  const navigate = useNavigate()
  const addInfo = (e) => {
    const { name, value } = e.target
    setInfo({ ...info, [name]: value })
  }
  const onAddHandler = async (e) => {
    e.preventDefault()
    switch ("") {
      case info.loginId.trim():
        return alert("아이디를 적어주세요")
      case info.password.trim():
        return alert("비밀번호를 적어주세요")
      case info.nickname.trim():
        return alert("닉네임을 적어주세요")
      default:
        return await dispatch(__postSignup({ ...info }))
    }
  }

  const dispatch = useDispatch()

  return (
    <div className={classes.loginWrap}>
      <form
        className={classes.loginForm}
        onSubmit={(e) => {
          onAddHandler(e)
          navigate("/")
        }}
      >
        <h3>회원가입</h3>
        <Input
          required
          className={classes.userInfo}
          placeholder="아이디"
          type="text"
          name="loginId"
          minLength="4"
          maxLength="10"
          pattern="^[a-z0-9]{4,10}$"
          title="영어 소문자 및 숫자"
          onChange={addInfo}
        />
        <Input
          required
          className={classes.userInfo}
          placeholder="닉네임"
          type="text"
          name="nickname"
          onChange={addInfo}
        />
        <Input
          required
          className={classes.userInfo}
          placeholder="비밀번호"
          type="password"
          minLength="8"
          maxLength="15"
          name="password"
          pattern="(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$"
          title="영어 대소문자, 숫자, 특수문자"
          onChange={addInfo}
        />
        <Button type="submit" className={classes.loginBtn}>
          회원 가입
        </Button>
      </form>
    </div>
  )
}

export default Signup

const StSignupForm = styled.div`
  display: flex;
  justify-content: center;
  width: 98%;
`
const ElForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`
