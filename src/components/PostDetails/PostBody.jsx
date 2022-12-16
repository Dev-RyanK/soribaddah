import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Button from "../elements/Button"

const PostBody = () => {
  return (
    <StDetailBody>
      <span>가수명, 제목</span>
      <br />
      <div>이미지 부분</div>
      <p>본문 내용 출력부</p>
    </StDetailBody>
  )
}

export default PostBody

const StDetailBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
