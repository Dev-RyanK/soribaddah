import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import classes from "../PostDetails/PostBody.module.css"
import { getPost, __getPost } from "../../redux/modules/postDetailSlice"
import { toggle, goToggle } from "../../redux/modules/togglePageSlice"
import { postGetInstance } from "../../shared/instance"
import PostComment from "./PostComment"
import Button from "../elements/Button"
import Input from "../elements/Input"
import Textarea from "../elements/Textarea"

const PostBody = () => {
  const { post, isLoading, error } = useSelector((state) => state.post)

  const [detailContent, setDetailContent] = useState({
    musicId: 0,
    title: "HARD CODE**NEXT EPISODE",
    artist: "AKMU",
    nickname: "Ryan",
    contents:
      "이번 앨범 [NEXT EPISODE]를 엮어낸 주제는 ‘Beyond Freedom(초월자유)’이다. ‘초월자유’란 단순히 육체적인 안락과 편안함을 넘어 어떠한 환경이나 상태에도 영향받지 않는 내면의 자유를 의미하며, AKMU는 이 주제를 트랙리스트 7곡에서 각기 다른 이야기로 풀어내었다.",
    image:
      "https://cdnimg.melon.co.kr/cm2/album/images/106/61/658/10661658_20210726111159_500.jpg?a937828fb23cb2663ea6063523e14fc3",
    createdAt: "2022-12-15T21:05:41.160353",
    modifiedAt: "2022-12-15T21:05:41.160353",
    commentList: [],
  })
  // const [toggleInput, setToggleInput] = useState(false)
  const { toggle } = useSelector((state) => state.toggle)
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

  // 상세페이지 보기 모드
  if (toggle === "unset")
    return (
      <StDetailWrapper>
        <StTitle>
          {/* 긴 이름 슬라이드(작업 중)*/}
          {detailContent?.title.length > 40 ? (
            <div className={classes.animatedTitle}>
              <div className={classes.track}>
                <h2>
                  {detailContent?.title}&nbsp;{detailContent?.title}&nbsp;
                  {detailContent?.title}&nbsp;{detailContent?.title}&nbsp;
                  {detailContent?.title}&nbsp;{detailContent?.title}
                </h2>
              </div>
            </div>
          ) : (
            // 특정 글자수 이하일 때
            <h2>{detailContent?.title}</h2>
          )}
          <h3>{detailContent?.artist}</h3>
        </StTitle>
        <ElBtnBox>
          <Button
            onClick={() => {
              // setToggleInput(!toggleInput)
              dispatch(goToggle("none"))
            }}
          >
            수정
          </Button>
          <Button>삭제</Button>
        </ElBtnBox>
        <ElCover
          style={{ gridArea: "albumCover" }}
          src={detailContent?.image}
          alt={`${detailContent?.artist}의 ${detailContent?.title} 앨범 커버`}
        ></ElCover>
        <p style={{ gridArea: "review" }}>{detailContent?.contents}</p>
        <PostComment />
      </StDetailWrapper>
    )

  // 수정모드 전환 시
  if (toggle === "none")
    return (
      // 인풋 전환, display: unset, comment 숨김상태로
      <StFormWrapper>
        <StTitle>
          <Input defaultValue={detailContent?.title} />
          <Input defaultValue={detailContent?.artist} />
        </StTitle>
        <ElBtnBox>
          <Button
            onClick={() => {
              dispatch(goToggle("unset"))
            }}
          >
            확인
          </Button>
          <Button>삭제</Button>
        </ElBtnBox>
        <ElCover></ElCover>
        <ElURL
          style={{ gridArea: "albumCover" }}
          defaultValue={detailContent?.image}
        />
        <textarea
          style={{ gridArea: "review" }}
          defaultValue={detailContent?.contents}
        />
      </StFormWrapper>
    )
}

export default PostBody

const StDetailWrapper = styled.div`
  display: grid;
  height: 800px;
  grid-template-columns: 10% 1fr 10%;
  grid-template-rows: 50px 40px 1fr 40px 1fr 1fr;
  grid-template-areas:
    ". title btnBox"
    ". . ."
    ". albumCover ."
    ". . ."
    ". review ."
    ". comments .";
`

const StFormWrapper = styled.div`
  display: grid;
  height: 800px;
  width: 100%;
  grid-template-columns: 10% 1fr 10%;
  grid-template-rows: 50px 40px 1fr 40px 1fr 1fr;
  grid-template-areas:
    ". title btnBox"
    ". . ."
    ". albumCover ."
    ". . ."
    ". review ."
    ". comments .";
`

const StTitle = styled.div`
  display: grid;
  align-content: center;
  h2,
  h3 {
    margin-block: 0;
    margin-bottom: 5px;
  }
  width: 100%;
  text-align: center;
  grid-area: title;
`

const ElBtnBox = styled.div`
  display: grid;
  align-content: center;
  /* margin-right: 0 auto; */
  margin-left: auto;
  grid-area: btnBox;
`

const ElCover = styled.img`
  width: 100%;
  grid-area: albumCover;
`

const ElURL = styled.input`
  grid-area: albumCover;
`
