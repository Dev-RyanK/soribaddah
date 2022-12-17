import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Button from "../elements/Button"

const PostHeader = () => {
  return (
    <StHeader>
      {/* 그리드 써서 3단 분배(h2 중앙정렬) 할 것 */}
      <h2>상세페이지</h2>
      <div>
        <Button>수정</Button>
        <Button>삭제</Button>
      </div>
    </StHeader>
  )
}

export default PostHeader

const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  h2 {
    margin-block: 0;
  }
  div {
    display: flex;
    flex-direction: column;
    margin-right: 0 auto;
    margin-left: auto;
  }
`
