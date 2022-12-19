import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import classes from "../home/Home.module.css";
import HomeCardList from "./HomeCardList";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={classes.header}>
        <button
          onClick={() => {
            navigate("/AddList");
          }}
        >
          추천하기
        </button>
      </div>
      <HomeCardList />
    </>
  );
};

export default Home;
