import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { __addMusic } from "../../../redux/modules/todoSlice"
import { api } from "../../../shared/api"
import classes from "./AddList.module.css"

const AddList = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [data, setData] = useState({
    title: "",
    artist: "",
    image: "",
    contents: "",
  })

  const changeInput = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const onAddHandler = async (e) => {
    e.preventDefault()
    api.post(`/api/music`, { ...data })
    // dispatch(__addMusic({ ...data }))
    console.log({ ...data })
    // if (!data_title || !data_artist || !data_contents) {
    //   return alert("빈칸을 채워 주세요");
    // }
  }

  return (
    <form
      onSubmit={(e) => {
        onAddHandler(e)
        navigate("/")
      }}
      method="post"
      className={classes.box}
    >
      <h2 className={classes.head}>등록하기</h2>
      <div className={classes.title}>
        <input
          type="text"
          name="artist"
          // value={data.artist}
          maxLength="20"
          placeholder="가수이름을 입력하세요"
          onChange={changeInput}
        />
        <input
          type="text"
          name="title"
          // value={data.title}
          maxLength="20"
          placeholder="제목을 입력해주세요"
          onChange={changeInput}
        />
      </div>
      {/* 미리보기 이미지 */}
      <div className={classes.previewImg}>
        <img src={data.image} alt={`${data.title}의 ${data.artist}`}></img>
      </div>
      <input
        style={{ width: "500px", height: "30px" }}
        type="URL"
        name="image"
        placeholder="이미지 URL"
        onChange={changeInput}
      />
      <div className={classes.comment}>
        <textarea
          style={{ width: "500px" }}
          rows="4"
          cols="50"
          required
          name="contents"
          // value={data.contents}
          placeholder="내용을 입력해주세요"
          onChange={changeInput}
        />
      </div>{" "}
      <br />
      <footer className={classes.btn}>
        <button type="submit" style={{ width: "100px" }}>
          등록
        </button>
        &nbsp;
        <button
          type="button"
          style={{ width: "100px" }}
          onClick={() => navigate("/")}
        >
          뒤로가기
        </button>
      </footer>
    </form>
  )
}

export default AddList
