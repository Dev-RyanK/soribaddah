import React, { useState, useEffect } from "react"
import Input from "../../components/elements/Input"
import Button from "../../components/elements/Button"
import { useDispatch, useSelector } from "react-redux"
import { __postLogin } from "../../redux/modules/loginSlice"
import { useNavigate, Link } from "react-router-dom"
import classes from "./Login.module.css"
// import { onSilentRefresh } from "../shared/api"
import { PUBLIC_URL, REDIRECT_URI, REST_API_KEY } from "../../shared/api"

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
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`
  useEffect(() => {
    // onSilentRefresh()
  }, [])

  return (
    <div className={classes.loginWrap}>
      <form
        className={classes.loginForm}
        onSubmit={(e) => {
          onLoginHandler(e)
          navigate("/music")
        }}
      >
        <h3>로그인</h3>
        <Input
          className={classes.userInfo}
          required
          placeholder="아이디"
          type="text"
          name="loginId"
          minLength="4"
          maxLength="10"
          onChange={addInfo}
        />
        <Input
          className={classes.userInfo}
          required
          placeholder="비밀번호"
          type="password"
          minLength="8"
          maxLength="15"
          name="password"
          onChange={addInfo}
        />
        <Button className={classes.loginBtn} type="submit">
          로그인
        </Button>
        <img
          className={classes.naverLoginBtn}
          src="/img/naver_btn_full.webp"
          alt="네이버 로그인"
          onClick={() => {
            window.open(
              "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=LooykSb4lJ9_VSgNb08B&state=state&redirect_uri=http://129.154.54.69:8080/api/login/naver/callback"
            )
          }}
        />
        <div
          onClick={() => {
            // window.location.href = KAKAO_AUTH_URL
            window.location.assign(KAKAO_AUTH_URL)
          }}
        >
          카카오 로그인
        </div>
        <Link to="/signup">
          <span>회원가입</span>
        </Link>
      </form>
    </div>
  )
}

export default Login
