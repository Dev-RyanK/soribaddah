import React from "react"
import Auth from "./Auth"
import {
  BrowserRouter as Router,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom"
import { useEffect } from "react"
import { REDIRECT_URI, REST_API_KEY } from "./kakaoApi"
import axios from "axios"
import { apis, DB } from "../../shared/api"

const KakaoLogin = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const KAKAO_CODE = location.search.split("=")[1]

  const getKakaoToken = () => {
    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          localStorage.setItem("token", data.access_token)
        } else {
          navigate("/")
        }
      })
  }
  useEffect(() => {
    if (!location.search) return
    // apis.kakao(KAKAO_CODE)
    // axios.get(`https://kauth.kakao.com/oauth/token`)
    getKakaoToken()
    axios
      // .post(`http://192.168.5.7:8080/api/login/kakao?code=${KAKAO_CODE}`)
      .get(`${DB}/api/login/kakao?code=${KAKAO_CODE}`)
      .then((res) => res.json())
      .catch((err) => console.log(err))
    /* .then((data) => {
        localStorage.setItem("kakaoToken", data.token)
      }) */
  }, [])

  /*   const IP = useEffect(() => {
    axios
      // .get(`https://${IP}/users/kakao/redirect?code=${KAKAO_CODE}`)
      .post(`http://192.168.5.7:8080/api/login/kakao?code=${KAKAO_CODE}`)
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("kakaoToken", data.token)
      })
  }) */

  return <div>KakaoLogin</div>
}
export default KakaoLogin
