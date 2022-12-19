import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      &nbsp;
      <h1>소리받아 </h1>
      <button className={classes.h1}>로그인/회원가입</button>
    </header>
  );
};

export default Header;
