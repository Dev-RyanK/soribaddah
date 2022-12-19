import React, { useState } from "react"
import styled from "styled-components"
import Input from "../components/elements/Input"
import Button from "../components/elements/Button"

const Signup = () => {
  const [info, setInfo] = useState({})

  const addInfo = (e) => {
    const { name, value } = e.target
    setInfo({ ...info, [name]: value })
  }

  return (
    <StSignupForm>
      <ElForm
        onSubmit={(e) => {
          e.preventDefault()
          switch ("") {
            case info.userId.trim():
              return alert("아이디를 적어주세요")
            case info.userPassword.trim():
              return alert("비밀번호를 적어주세요")
            case info.nickname.trim():
              return alert("닉네임을 적어주세요")
            default:
              return
          }
        }}
      >
        <h3>회원가입</h3>
        <Input
          required
          placeholder="아이디"
          type="text"
          name="userId"
          maxLength="8"
          onChange={addInfo}
        />
        <Input
          required
          placeholder="닉네임"
          type="text"
          name="nickname"
          maxLength="8"
          onChange={addInfo}
        />
        <Input
          required
          placeholder="비밀번호"
          type="password"
          maxLength="8"
          name="userPassword"
          onChange={addInfo}
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
