import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import classes from "./PostComment.module.css"
import Button from "../../components/elements/Button"
import Textarea from "../../components/elements/Textarea"
import { instance, commentGetInstance } from "../../shared/instance"

const PostComment = () => {
  const [commentToggle, setCommentToggle] = useState(false)
  const { post, isLoading, error } = useSelector((state) => state.post)

  const [comments, setComments] = useState([])
  const param = useParams()
  const paramId = parseInt(param.id)
  const dispatch = useDispatch()
  const fetchCommentContent = async () => {
    try {
      const data = await commentGetInstance.get(`?musicId=${paramId}`)
      setComments([...data.data])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCommentContent()
  }, [dispatch])

  return (
    <>
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
    </>
  )
}

export default PostComment

const StCommentForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  button {
    width: fit-content;
  }
`
const StCommentList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
