import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Button from "../elements/Button"
import Textarea from "../elements/Textarea"

const PostComment = () => {
  const [commentToggle, setCommentToggle] = useState(false)
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
            console.log("hey")
            /* if (commentToggle) {
              try {
                alert("등록 성공!")
              } catch {
                alert("등록 실패 :(")
              }
            } */
          }}
        >
          댓글 등록하기
        </Button>
      </StCommentForm>
      <StCommentList>
        <span className="commentContents">
          엄청나게 긴 댓글 엄청나게 긴 댓글 엄청나게 긴 댓글 엄청나게 긴 댓글
          엄청나게 긴 댓글 엄청나게 긴 댓글 사실 몇 자 정도로 제한하고 싶습니다
          / 작성자명
        </span>
        <div className="buttonBox">
          <Button>✏</Button>
          <Button>❌</Button>
        </div>
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
  flex-direction: row;
  /* justify-content: space-between; */
  width: 100%;
  // 수정삭제 버튼
  .buttonBox {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: 0 auto;
    width: fit-content;
    button {
      width: fit-content;
      height: 2rem;
      font-size: smaller;
    }
  }
`
