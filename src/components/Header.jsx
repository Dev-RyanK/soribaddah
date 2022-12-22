import React from "react"
import classes from "./Header.module.css"
import { Link, useNavigate } from "react-router-dom"
import Button from "./elements/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWater } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  const navigate = useNavigate()
  return (
    <header className={classes.head}>
      {/* 그리드 중앙정렬용 빈칸 */}
      &nbsp;
      <Link to={"/"}>
        <h1 className={classes.mainTitle}>
          <FontAwesomeIcon icon={faWater}></FontAwesomeIcon>&nbsp;소리받아&nbsp;
          <FontAwesomeIcon icon={faWater}></FontAwesomeIcon>
        </h1>
      </Link>
      {localStorage.ACCESS_TOKEN ? (
        <div>
          <Button
            className={classes.btn}
            onClick={() => {
              localStorage.removeItem("ACCESS_TOKEN")
              localStorage.removeItem("REFRESH_TOKEN")
              alert("로그아웃 되었습니다.")
              navigate("/music")
            }}
          >
            로그아웃
          </Button>
        </div>
      ) : (
        <div>
          <Button className={classes.btn} onClick={() => navigate("/login")}>
            로그인
          </Button>
        </div>
      )}
      {/*       <div>
        <Link to={"/login"}>
          <Button className={classes.btn}>로그인</Button>
        </Link>
      </div> */}
    </header>
  )
}

export default Header
