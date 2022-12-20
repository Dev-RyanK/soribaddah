import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Input from "../components/elements/Input"
import Button from "../components/elements/Button"
import { useDispatch, useSelector } from "react-redux"
import { __postLogin } from "../redux/modules/loginSlice"
import { useNavigate } from "react-router-dom"
// import { onSilentRefresh } from "../shared/api"

const Login = () => {
  const navigate = useNavigate()
  const [logged, setlogged] = useState({
    loginId: "",
    password: "",
  })

  const addInfo = (e) => {
    const { name, value } = e.target
    setlogged({ ...logged, [name]: value })
  }

  const onLoginHandler = async (e) => {
    e.preventDefault()
    switch ("") {
      case logged.loginId.trim():
        return alert("아이디를 적어주세요")
      case logged.password.trim():
        return alert("비밀번호를 적어주세요")
      default:
        return await dispatch(__postLogin({ ...logged }))
      // navigate("/")
    }
  }

  const dispatch = useDispatch()

  useEffect(() => {
    // onSilentRefresh()
  }, [])

  return (
    <StSignupForm>
      <ElForm
        onSubmit={(e) => {
          onLoginHandler(e)
        }}
      >
        <h3>로그인</h3>
        <Input
          required
          placeholder="아이디"
          type="text"
          name="loginId"
          minLength="4"
          maxLength="10"
          onChange={addInfo}
        />
        <Input
          required
          placeholder="비밀번호"
          type="password"
          minLength="8"
          maxLength="15"
          name="password"
          onChange={addInfo}
        />
        <Button type="submit">로그인</Button>
      </ElForm>
    </StSignupForm>
  )
}

export default Login

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
