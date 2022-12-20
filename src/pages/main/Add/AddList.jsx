import axios from "axios";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __addMusic } from "../../../redux/modules/todoSlice";
import classes from "./AddList.module.css";

const AddList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [content, setContent] = useState("");

  const [music, setMusic] = useState({
    title: "",
    artist: "",
    content: "",
  });

  const [imageurl, setImageUrl] = useState(null);

  const musicHandler = (e) => {
    setTitle(e.target.value);
    setArtist(e.target.value);
    setContent(e.target.value);
    setMusic(e.target.value);
  };

  const onSubmit = (e) => {
    musicHandler(e);
    e.preventDefault();

    //   const formData = new formData();
    //   formData.append("title", music.title);
    //   formData.append("artist", music.artist);
    //   formData.append("content", music.content);

    //   dispatch(__addMusic(formData));
    //   for (var pair of formData.entries()) {
    //     console.log(pair[0] + "," + pair[1]);
    //   }
    //   if (!title || !artist || !content) {
    //     return alert("빈칸 없이 입력해 주세요");
    //   }
  };

  return (
    <div className={classes.header}>
      <form>
        <div method="post" encType="multipart/form-data">
          <div className={classes.title}>
            가수명:{" "}
            <input
              type="text"
              name="artist"
              size="midium"
              placeholder="가수이름을 입력하세요"
              onChange={musicHandler}
            />
            노래 제목:{""}
            <input
              type="text"
              name="title"
              size="large"
              placeholder="제목을 입력해주세요"
              onChange={musicHandler}
            />
          </div>
          <div className={classes.image}>
            <input type="url" name="image" onChange={musicHandler} />
          </div>
          <div className={classes.comment}>
            추천 내용
            <input
              size="textArea"
              name="content"
              placeholder="내용을 입력해주세요"
              onChange={musicHandler}
            />
          </div>
          <button
            className={classes.btn}
            type="submit"
            form="add"
            onClick={onSubmit}
          >
            등록
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddList;
