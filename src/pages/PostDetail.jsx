import React, { useEffect, useState } from "react"
import Button from "../components/elements/Button"
import styled from "styled-components"
import PostHeader from "../components/PostDetails/PostHeader"
import PostBody from "../components/PostDetails/PostBody"
import PostReplies from "../components/PostDetails/PostReplies"

// export const DB = process.env.React_APP_DBSERVER

const PostDetail = () => {
  useEffect(() => {}, [])
  return (
    <StWrapper>
      <StDetailContent>
        <PostHeader />
        <PostBody />
        <PostReplies />
      </StDetailContent>
    </StWrapper>
  )
}

export default PostDetail

const StWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div {
    border: 1px solid #000;
    /* padding: 1rem; */
  }
`

const StDetailContent = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  width: 600px;
  border: 4px solid teal;
`
