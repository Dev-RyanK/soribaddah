import React, { useState } from "react"
import styled from "styled-components"
import Input from "../components/elements/Input"
import Button from "../components/elements/Button"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { __postSignup } from "../redux/modules/signupSlice"

const Signup = () => {
  const [info, setInfo] = useState({
    loginId: "apitest12",
    password: "asd123!@#",
    nickname: "apitTest01",
  })

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
        // return await dispatch(__postSignup({ ...info }))
        console.log(info)
    }
  }

  const dispatch = useDispatch()

  return (
    <StSignupForm>
      <ElForm
        onSubmit={(e) => {
          onAddHandler(e)
        }}
      >
        <h3>회원가입</h3>
        <Input
          required
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
          placeholder="닉네임"
          type="text"
          name="nickname"
          onChange={addInfo}
        />
        <Input
          required
          placeholder="비밀번호"
          type="password"
          minLength="8"
          maxLength="15"
          name="password"
          pattern="(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$"
          title="영어 대소문자, 숫자, 특수문자"
          onChange={(e) => {
            addInfo(e)
            console.log(e.target.value)
          }}
        />
        <Button type="submit">회원 가입</Button>
      </ElForm>
    </StSignupForm>
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
