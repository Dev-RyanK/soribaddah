import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"

import styled from "styled-components"
import classes from "../PostDetails/PostBody.module.css"

import { goToggle } from "../../redux/modules/togglePageSlice"
import { api, apis } from "../../shared/api"

import PostComment from "./PostComment"
import Button from "../elements/Button"
import Input from "../elements/Input"
import Textarea from "../elements/Textarea"

const PostBody = () => {
  const { post, isLoading, error } = useSelector((state) => state.post)

  const [detailContent, setDetailContent] = useState({
    musicId: 0,
    title: "",
    artist: "",
    nickname: "",
    contents: "",
    image: "",
    createdAt: "",
    modifiedAt: "",
    musicIsMine: "false",
    commentList: [],
  })
  // const [toggleInput, setToggleInput] = useState(false)
  const { toggle } = useSelector((state) => state.toggle)
  const param = useParams()
  const paramId = parseInt(param.id)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const fetchDetailContent = async () => {
    try {
      // 이거 thunk 처리? 해야할 것 같음
      const musicData = await api.get(`/api/music/${paramId}`)
      setDetailContent(musicData.data.data)
    } catch (error) {
      // console.log(error)
    }
  }
  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setDetailContent({ ...detailContent, [name]: value })
  }

  const onDeleteHandler = () => {
    apis.delPost(paramId)
    navigate("/music")
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
          <h3>{detailContent?.nickname}</h3>
          {/* 긴 이름 슬라이드(작업 중) props로 변수 내려주게 작업*/}
          {detailContent?.title.length > 40 ? (
            <div className={classes.animatedTitle}>
              <div className={classes.track}>
                <h2 className={classes.slideText}>
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
        {detailContent?.musicIsMine ? (
          <ElBtnBox>
            <Button
              type="button"
              onClick={() => {
                // setToggleInput(!toggleInput)
                dispatch(goToggle("none"))
              }}
            >
              수정
            </Button>
            <Button type="submit" onClick={onDeleteHandler}>
              삭제
            </Button>
          </ElBtnBox>
        ) : (
          <></>
        )}
        <ElCover
          src={detailContent?.image}
          alt={`${detailContent?.artist}의 ${detailContent?.title} 앨범 커버`}
        />
        <p style={{ gridArea: "review" }}>{detailContent?.contents}</p>
        {/* 댓글란 */}
        {/* <PostComment /> */}
      </StDetailWrapper>
    )

  // 수정모드 전환 시
  if (toggle === "none")
    return (
      // 인풋 전환, display: unset, comment 숨김상태로
      <StFormWrapper
        onSubmit={(e) => {
          e.preventDefault()
          console.log(detailContent)
        }}
      >
        {/* 제목 / 가수 */}
        <StTitle>
          <Input
            name="title"
            defaultValue={detailContent?.title}
            onChange={onChangeHandler}
          />
          <Input
            name="artist"
            defaultValue={detailContent?.artist}
            onChange={onChangeHandler}
          />
        </StTitle>
        {/* 확인/취소 버튼 */}
        <ElBtnBox>
          <Button
            type="submit"
            onClick={(e) => {
              dispatch(goToggle("unset"))
              // setDetailContent({ detailContent })
              console.log(detailContent)
            }}
          >
            확인
          </Button>
          <Button type="button" onClick={() => dispatch(goToggle("unset"))}>
            취소
          </Button>
        </ElBtnBox>
        <span className={classes.desc}>
          ▲ 이전 이미지
          <br />새 이미지 주소 ▼
        </span>
        {/* 이미지 보여주기 */}
        <ElCover
          src={detailContent?.image}
          alt="이미지를 넣어주세요"
          onChange={onChangeHandler}
        />
        {/* 이미지 링크 */}
        <Input
          name="image"
          type="URL"
          className={classes.albumURL}
          defaultValue={detailContent?.image}
          onChange={onChangeHandler}
        />
        {/* 리뷰 */}
        <Textarea
          name="contents"
          className={classes.review}
          defaultValue={detailContent?.contents}
          onChange={onChangeHandler}
        />
      </StFormWrapper>
    )
}

export default PostBody

const StDetailWrapper = styled.div`
  display: grid;
  grid-template-columns: 10% 1fr 10%;
  grid-auto-rows: repeat(4, 1fr);
  grid-template-areas:
    ". title btnBox"
    ". albumCover ."
    ". review ."
    "comments comments comments";
  row-gap: 20px;
`

const StFormWrapper = styled.form`
  display: grid;
  width: 100%;
  grid-template-columns: 10% 1fr 10%;
  grid-auto-rows: repeat(6, 1fr);
  grid-template-areas:
    ". title btnBox"
    ". albumCover ."
    ". desc ."
    ". albumURL ."
    ". review ."
    ". comments .";
  row-gap: 20px;
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
