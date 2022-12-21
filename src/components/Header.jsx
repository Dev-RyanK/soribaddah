import React from "react"
import classes from "./Header.module.css"
import { Link } from "react-router-dom"
import Button from "./elements/Button"

const Header = () => {
  return (
    <header className={classes.head}>
      {/* 그리드 중앙정렬용 빈칸 */}
      &nbsp;
      <Link to={"/"}>
        <h1>소리받아</h1>
      </Link>
      <div>
        <Link to={"/login"}>
          <Button className={classes.btn}>로그인</Button>
        </Link>
      </div>
    </header>
  )
}

export default Header
