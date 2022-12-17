import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.h1}>
        <h1>소리받아 </h1>
        <button>로그인/회원가입</button>
      </div>
    </div>
  );
};

export default Header;
