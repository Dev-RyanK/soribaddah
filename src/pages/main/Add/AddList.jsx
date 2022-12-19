import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./AddList.module.css";

const AddList = () => {
  const navigate = useNavigate();
  const [music, setMusic] = useState({
    title: "",
  });
  const [musics, setMusics] = useState([]);

  const fetchMusics = async () => {
    const { data } = await axios.get("http://localhost:3001/AddList");
    setMusics(data);
  };

  const onSubmit = async (music) => {
    await axios.post("http://localhost:3001/AddList", music);
    setMusics([...musics, music]);
  };
  useEffect(() => {
    fetchMusics();
  }, []);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler(music);
        }}
      >
        <div className={classes.header}>
          <div className={classes.title}>
            가수명:{" "}
            <input
              type="text"
              onChange={(ev) => {
                const { value } = ev.target;
                setMusic({
                  ...music,
                  artist: value,
                });
              }}
            />
            노래 제목:{" "}
            <input
              type="text"
              onChange={(ev) => {
                const { value } = ev.target;
                setMusic({
                  ...music,
                  title: value,
                });
              }}
            />
          </div>
          <div className={classes.image}>
            <input id="image" type="file" required />
          </div>
          <div className={classes.comment}>
            추천 내용
            <textarea
              type="textArea"
              onChange={(ev) => {
                const { value } = ev.target;
                setMusic({
                  ...music,
                  contents: value,
                });
              }}
            />
          </div>
          <button>등록</button>
        </div>
      </form>
    </>
  );
};

export default AddList;
