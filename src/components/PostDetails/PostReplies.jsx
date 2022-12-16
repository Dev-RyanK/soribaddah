import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Button from "../elements/Button"
import Textarea from "../elements/Textarea"

const PostReplies = () => {
  const [replyToggle, setReplyToggle] = useState(false)

  return (
    <StReplyForm>
      <Textarea hidden={!replyToggle}></Textarea>
      <Button
        type="button"
        hidden={!replyToggle}
        onClick={() => {
          setReplyToggle(!replyToggle)
        }}
      >
        확인
      </Button>
      <Button
        type="button"
        hidden={replyToggle}
        onClick={() => {
          setReplyToggle(!replyToggle)
        }}
      >
        댓글 등록하기
      </Button>
      <div>댓글 출력 부분</div>
    </StReplyForm>
  )
}

export default PostReplies

const StReplyForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  button {
    width: 50%;
  }
  div {
    width: 100%;
  }
`
