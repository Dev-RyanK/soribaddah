import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getMusic } from "../../../redux/modules/todoSlice";
import classes from "../home/HomeCardList.css";

const HomeCardList = () => {
  const dispatch = useDispatch();
  const { isLoading, error, music } = useSelector((state) => state.music);

  useEffect(() => {
    dispatch(__getMusic());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩중...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div className={classes.box}>
      {music.map((music) => (
        <div className={classes.body} key={music.musicId}>
          {music.title}-{music.artist}
          <img
            src={music.image}
            style={{
              marginTop: "20px",
              width: "250px",
              height: "250px",
            }}
          />
          {music.contents}
        </div>
      ))}
    </div>
  );
};

export default HomeCardList;
