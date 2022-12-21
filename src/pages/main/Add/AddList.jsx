import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __addMusic } from "../../../redux/modules/todoSlice";
import classes from "./AddList.module.css";

const AddList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    data_title: "",
    data_artist: "",
    data_image: "",
    data_contents: "",
  });

  const changeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const onAddHandler = async (e) => {
    e.preventDefault();
    dispatch(__addMusic({ ...data }));
    // if (!data_title || !data_artist || !data_contents) {
    //   return alert("빈칸을 채워 주세요");
    // }
  };

  return (
    <form method="post" className={classes.box}>
      <h2 className={classes.head}>등록하기</h2>
      <div className={classes.title}>
        <input
          type="text"
          name="data_artist"
          value={data.data_artist}
          maxLength="20"
          placeholder="가수이름을 입력하세요"
          onChange={changeInput}
        />
        <input
          type="text"
          name="data_title"
          value={data.data_title}
          maxLength="20"
          placeholder="제목을 입력해주세요"
          onChange={changeInput}
        />
      </div>
      <input
        style={{ width: "500px", height: "30px" }}
        type="text"
        name="data_image"
        placeholder="이미지 URL"
        onChange={changeInput}
      />
      <div className={classes.comment}>
        <textarea
          style={{ width: "500px" }}
          rows="4"
          cols="50"
          required
          name="data_contents"
          value={data.data_contents}
          placeholder="내용을 입력해주세요"
          onChange={changeInput}
        />
      </div>{" "}
      <br />
      <footer className={classes.btn}>
        <button style={{ width: "100px" }} onSubmit={onAddHandler}>
          등록
        </button>
        &nbsp;
        <button style={{ width: "100px" }} onClick={() => navigate("/")}>
          뒤로가기
        </button>
      </footer>
    </form>
  );
};

export default AddList;
