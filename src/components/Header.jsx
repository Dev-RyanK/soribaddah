import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.head}>
      &nbsp;
      <h1>소리받아 </h1>
      <button className={classes.btn}>로그인/회원가입</button>
    </header>
  );
};

export default Header;
