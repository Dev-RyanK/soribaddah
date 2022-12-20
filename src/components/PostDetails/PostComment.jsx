import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import classes from "./PostComment.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faVolumeHigh,
  faShuffle,
  faRepeat,
  faPlus,
} from "@fortawesome/free-solid-svg-icons"

// import { api } from "../../shared/api"
import Button from "../../components/elements/Button"
import Textarea from "../../components/elements/Textarea"
// import { commentGetInstance } from "../../shared/instance"
import { toggle } from "../../redux/modules/togglePageSlice"
import { api, apis } from "../../shared/api"

const PostComment = () => {
  const [toggleInput, setToggleInput] = useState(false)
  const [commentToggle, setCommentToggle] = useState(false)
  const [comment, setComment] = useState("")
  // const [user] // 코멘트 작성하는 유저 닉네임 받아서 같이 넣어야 됨
  const { post, isLoading, error } = useSelector((state) => state.post)
  const { toggle } = useSelector((state) => state.toggle)

  const [comments, setComments] = useState([
    /* 연결 에러시 삽입되는 임시 데이터 */
    {
      musicId: 0,
      commentId: 1,
      contents: "짧은 댓글",
      createdAt: "2022-12-15T21:05:41.24937",
      modifiedAt: "2022-12-15T21:05:41.160353",
      nickname: "ryan",
    },
    {
      musicId: 0,
      commentId: 2,
      contents:
        "엄청나게 긴 댓글 엄청나게 긴 댓글 엄청나게 긴 댓글 엄청나게 긴 댓글 엄청나게 긴 댓글 엄청나게 긴 댓글 사실 240자 정도로 제한하고 싶습니다",
      createdAt: "2022-12-15T21:05:41.24937",
      modifiedAt: "2022-12-15T21:05:41.160353",
      nickname: "작성자",
    },
  ])
  const param = useParams()
  const paramId = parseInt(param.id)
  const dispatch = useDispatch()
  const fetchCommentContent = async () => {
    try {
      const data = await api.get(`/api/music/${paramId}`)
      setComments([...data.data.commentList])
      // setToggleInput(toggle)
    } catch (error) {
      console.log(error)
    }
  }
  const commentOnChange = (e) => {
    setComment(e.target.value)
  }
  const onsubmitHandler = (e) => {
    e.preventDefault()
    // apis.postComment(comment) // 내용만 들어가면 안 되고 형식 맞춰서!
  }

  useEffect(() => {
    fetchCommentContent()
  }, [dispatch])

  return (
    <StCommentWrapper
      style={{ display: `${toggleInput}` }}
      onsubmit={(e) => {
        e.preventDefault()
      }}
    >
      <FontAwesomeIcon
        icon={faVolumeHigh}
        className={classes.icons}
        style={{ gridArea: "icon1" }}
      />
      <FontAwesomeIcon
        icon={faShuffle}
        className={classes.icons}
        style={{ gridArea: "icon2" }}
      />
      <FontAwesomeIcon
        icon={faRepeat}
        className={classes.icons}
        style={{ gridArea: "icon3" }}
      />
      <FontAwesomeIcon
        icon={faPlus}
        className={classes.icons}
        style={{ gridArea: "icon4" }}
      />
      <StCommentForm>
        {/* 댓글 등록란 */}
        <Textarea
          className={classes.reviewText}
          hidden={!commentToggle}
          onChange={commentOnChange}
        />

        <Button
          type="button"
          hidden={false}
          onClick={() => {
            setCommentToggle(!commentToggle)
            // dispatch 해야됨
          }}
        >
          댓글 등록하기
        </Button>
      </StCommentForm>

      {/* 코맨트 리스트 출력 */}
      <StCommentList>
        {comments?.map((item) => (
          <span
            key={"commentSpan" + item.commentId}
            className={classes.commentBox}
          >
            {item.contents} / {item.nickname}
            <div
              key={"commentButton" + item.commentId}
              className={classes.buttonBox}
            >
              <Button>📝</Button>
              <Button>❌</Button>
            </div>
          </span>
        ))}
      </StCommentList>
    </StCommentWrapper>
  )
}

export default PostComment

const StCommentWrapper = styled.div`
  display: grid;
  grid-template-columns: 10% repeat(4, 1fr) 10%;
  grid-auto-rows: repeat(3, 1fr);
  grid-template-areas:
    ". icon1 icon2 icon3 icon4 ."
    ". commentForm commentForm commentForm commentForm ."
    "commentList commentList commentList commentList commentList commentList";
  grid-area: comments;
  justify-items: center;
`

const StCommentForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  button {
    width: 50%;
  }
  grid-area: commentForm;
`
const StCommentList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-area: commentList;
`
