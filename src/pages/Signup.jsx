import React, { useState } from "react"
import styled from "styled-components"
import Input from "../components/elements/Input"
import Button from "../components/elements/Button"

const Signup = () => {
  const [inputId, setInputId] = useState("")
  const [inputNickname, setInputNickname] = useState("")
  const [inputPassword, setInputPassword] = useState("")
  // 객체로 쓸 경우
  const [info, setInfo] = useState({
    userId: "",
    userPassword: "",
    nickname: "",
  })

  const addInfo = (e) => {
    const { name, value } = e.target
    setInfo({ ...info, [name]: value })
  }

  return (
    <StSignupForm>
      {/* 작업 중 */}
      <ElForm
        onSubmit={(e) => {
          e.preventDefault()
          setInfo({ info })
          console.log(info)
        }}
      >
        <h3>회원가입</h3>
        <Input
          required
          placeholder="아이디"
          type="text"
          name="{userId}"
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
