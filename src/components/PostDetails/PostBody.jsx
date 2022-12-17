import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { getPost, __getPost } from "../../redux/modules/postDetailSlice"
import { instance, postGetInstance } from "../../shared/instance"
import Button from "../../components/elements/Button"
import classes from "./PostBody.module.css"

const PostBody = () => {
  const { post, isLoading, error } = useSelector((state) => state.post)

  const [detailContent, setDetailContent] = useState({
    /*  musicId: 0,
    title: "HARD CODE**NEXT EPISODE",
    artist: "AKMU",
    nickname: "Ryan",
    contents:
      "이번 앨범 [NEXT EPISODE]를 엮어낸 주제는 ‘Beyond Freedom(초월자유)’이다. ‘초월자유’란 단순히 육체적인 안락과 편안함을 넘어 어떠한 환경이나 상태에도 영향받지 않는 내면의 자유를 의미하며, AKMU는 이 주제를 트랙리스트 7곡에서 각기 다른 이야기로 풀어내었다.",
    image:
      "https://cdnimg.melon.co.kr/cm2/album/images/106/61/658/10661658_20210726111159_500.jpg?a937828fb23cb2663ea6063523e14fc3",
    createdAt: "2022-12-15T21:05:41.160353",
    modifiedAt: "2022-12-15T21:05:41.160353",
    commentList: [], */
  })
  const param = useParams()
  const paramId = parseInt(param.id)
  const dispatch = useDispatch()
  const fetchDetailContent = async () => {
    // dispatch(__getPost(paramId))
    // setDetailContent(post)
    try {
      const data = await postGetInstance.get(`?musicId=${paramId}`)
      setDetailContent(...data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchDetailContent()
  }, [dispatch])

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>{error.msg}</div>

  return (
    <>
      <StHeader className={classes.titleBox}>
        &nbsp;
        <div>
          <h2>{detailContent?.title}</h2>
          <br />
          <h3>{detailContent?.artist}</h3>
        </div>
        <div>
          <Button>수정</Button>
          <Button>삭제</Button>
        </div>
      </StHeader>
      <StDetailBody>
        <img
          src={detailContent?.image}
          alt={`${detailContent?.artist}의 ${detailContent?.title} 앨범 커버`}
        ></img>
        <p>{detailContent?.contents}</p>
      </StDetailBody>
    </>
  )
}

export default PostBody

const StHeader = styled.div`
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 0 auto;
    margin-left: auto;
    text-align: center;
  }
  grid-area: title;
`

const StDetailBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  img {
    width: 100%;
  }
  p {
    margin: 40px 0px 40px;
  }
`
