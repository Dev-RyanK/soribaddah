import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { __getMusic } from "../../../redux/modules/todoSlice"
import { api, apis } from "../../../shared/api"
import classes from "../home/HomeCardList.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBackward,
  faPlay,
  faPause,
  faForward,
} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

const HomeCardList = () => {
  const dispatch = useDispatch()
  const { isLoading, error, music } = useSelector((state) => state.music)
  const [musicList, setMusicList] = useState([])
  const fetchMusicList = async () => {
    const musicData = await api.get("/api/music")
    setMusicList([...musicData.data.data])
  }

  useEffect(() => {
    dispatch(__getMusic())
    fetchMusicList()
  }, [])

  if (isLoading) {
    return <div>로딩중...</div>
  }
  if (error) {
    return <div>{error.message}</div>
  }
  return (
    <>
      {/* 서버에서 Slice를 통해 바로 들어오는 값 */}
      {/* {music?.map((music) => ( */}
      {/* 서버에서 들어온 걸 일단 저장해두고 뿌리는 로컬 값 */}
      <div className={classes.wrapper}>
        {musicList.map((music) => (
          <Link key={"link" + music.musicId} to={`/music/${music.musicId}`}>
            <div className={classes.card} key={music.musicId}>
              <img
                key={"img" + music.musicId}
                className={classes.albumCover}
                src={music.image}
                alt={`제목: ${music.title} / 가수: ${music.artist}`}
              />
              <span key={"span" + music.musicId} className={classes.icons}>
                <FontAwesomeIcon
                  key={"icon1"}
                  icon={faBackward}
                  style={{ gridArea: "icon1" }}
                />
                <FontAwesomeIcon
                  key={"icon2"}
                  icon={faPlay}
                  style={{ gridArea: "icon2" }}
                />
                <FontAwesomeIcon
                  key={"icon3"}
                  icon={faPause}
                  style={{ gridArea: "icon3" }}
                />
                <FontAwesomeIcon
                  key={"icon4"}
                  icon={faForward}
                  style={{ gridArea: "icon4" }}
                />
              </span>
              <h3 key={"h3" + music.musicId} className={classes.musicInfo}>
                {music.title}
                <br />
                {music.artist}
              </h3>
              <p key={"p" + music.musicId} className={classes.musicContents}>
                {music.contents}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default HomeCardList
