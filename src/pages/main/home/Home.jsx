import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "../home/Home.module.css";
import { __getMusic } from "../../../redux/modules/todoSlice";

const Home = () => {
  const navigate = useNavigate();
  const musics = useSelector((state) => state.music.music);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getMusic());
  }, [dispatch]);

  return (
    <div>
      <div className={classes.header}>
        <button
          onClick={() => {
            navigate("/AddList");
          }}
        >
          추천하기
        </button>
      </div>
      {musics &&
        musics.map((music, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                navigate(`/PostDeatail/${music.id}`);
              }}
            >
              {music.artist}-{music.title}
              <img
                src={music.image}
                style={{
                  width: "250px",
                  height: "250px",
                }}
              />
              <div>{music.contents}</div>
            </button>
          );
        })}
    </div>
  );
};

export default Home;
