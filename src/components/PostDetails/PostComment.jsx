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

import { api } from "../../shared/api"

import Button from "../../components/elements/Button"
import Textarea from "../../components/elements/Textarea"
import { commentGetInstance } from "../../shared/api"
import { toggle } from "../../redux/modules/togglePageSlice"

const PostComment = () => {
  const [toggleInput, setToggleInput] = useState(false)
  const [commentToggle, setCommentToggle] = useState(false)
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
      // const data = await api.get(`/comment/${paramId}`)
      // setComments([...data.data])
      // setToggleInput(toggle)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCommentContent()
  }, [dispatch])

  return (
    <StCommentWrapper style={{ display: `${toggleInput}` }}>
      <FontAwesomeIcon icon={faVolumeHigh} style={{ gridArea: "icon1" }} />
      <FontAwesomeIcon icon={faShuffle} style={{ gridArea: "icon2" }} />
      <FontAwesomeIcon icon={faRepeat} style={{ gridArea: "icon3" }} />
      <FontAwesomeIcon icon={faPlus} style={{ gridArea: "icon4" }} />
      <StCommentForm>
        {/* 댓글 등록란 토글 */}
        <Textarea hidden={!commentToggle} />
        <Button
          type="button"
          hidden={false}
          onClick={() => {
            setCommentToggle(!commentToggle)
          }}
        >
          댓글 등록하기
        </Button>
      </StCommentForm>
      <StCommentList>
        {comments?.map((item) => (
          <span key={"span" + item.commentId} className={classes.commentBox}>
            {item.contents} / {item.nickname}
            <div key={"button" + item.commentId} className={classes.buttonBox}>
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
  /* height: 10%; */
  display: grid;
  grid-template-columns: 10% repeat(4, 1fr) 10%;
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    ". icon1 icon2 icon3 icon4 ."
    "commentForm commentForm commentForm commentForm commentForm commentForm"
    "commentList commentList commentList commentList commentList commentList";
  grid-area: comments;
`

const StIcons = styled.div`
  grid-area: icons;
`

const StCommentForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  button {
    width: fit-content;
  }
  grid-area: commentForm;
`
const StCommentList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-area: commentList;
`
