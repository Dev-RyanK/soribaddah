import { useDispatch } from "react-redux"
import styled from "styled-components"
import PostBody from "../components/PostDetails/PostBody"
import PostComment from "../components/PostDetails/PostComment"

const PostDetail = () => {
  return (
    <StWrapper>
      <StDetailContent>
        <PostBody />
        <PostComment />
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
`

const StDetailContent = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  width: 600px;
  border: 4px solid var(--color-midblue);
  border-radius: 1rem;
  box-shadow: 12px 12px 2px 1px var(--color-lightblue);
  padding: 50px;
`
