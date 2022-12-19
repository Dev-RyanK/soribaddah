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

// 게시글 중앙 정렬을 위한 래퍼
const StWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

/* const StDetailContent = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  grid-template-rows: 1fr 1fr;
  // PC기준 너비
  width: 600px;
  border: 4px solid var(--color-midblue);
  border-radius: 1rem;
  box-shadow: 12px 12px 2px 1px var(--color-lightblue);
  padding: 40px;
` */

const StDetailContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  // PC기준 너비
  width: 600px;
  border: 4px solid var(--color-midblue);
  border-radius: 1rem;
  box-shadow: 12px 12px 2px 1px var(--color-lightblue);
  padding: 40px;
`
