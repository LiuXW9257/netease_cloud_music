import React, { memo, useRef, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { shallowEqual } from 'react-redux'
import { Slider, message } from 'antd'
import { BarControl, BarOperator, BarPlayInfo, PlayerWrapper } from './style'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { formatGetImg, formatTime } from '@/utils/format'
import { getMusicResouceById } from '@/utils/player'
import { updateLyricIndex } from '@/store/modules/player'

interface IProps {
  children?: ReactNode
}

const AppPlayerBar: React.FC<IProps> = () => {
  const { currentSong, lyrics, lyricIndex } = useAppSelector(
    (state) => state.player,
    shallowEqual
  )
  const dispatch = useAppDispatch()

  const playerRef = useRef<HTMLAudioElement>(null)
  // 歌曲播放状态 true 正在播放 false 没有播放
  const [playState, setPlayState] = useState(false)
  // 歌曲总时长
  const [duration, setDuration] = useState(0)
  // 歌曲进度
  const [progress, setProgress] = useState(0)
  // 当前播放时长
  const [currentPlayTime, setCurrentPlayTime] = useState(0)
  // 进度条是否在拖拽中
  const [isSliding, setIsSliding] = useState(false)

  useEffect(() => {
    // 第一次加载 和 音乐切换以后
    if (playerRef.current) {
      playerRef.current.src = getMusicResouceById(currentSong.id)
      setDuration(currentSong.dt)
      playerRef.current
        .play()
        .then(() => {
          console.log('歌曲播放成功')
          setPlayState(true)
        })
        .catch((err) => {
          setPlayState(false)
          console.log('播放失败', err)
        })
    }
  }, [currentSong])

  // 控制音乐播放与暂停
  const handlePlayMusic = () => {
    playState
      ? playerRef.current?.pause()
      : playerRef.current?.play().catch((err) => {
          setPlayState(false)
          console.log('歌曲播放失败', err)
        })
    setPlayState(!playState)
  }

  // 播放一段以后的回调
  const handleTimeUpdate = () => {
    const currentTime = playerRef.current?.currentTime ?? 0

    if (!isSliding) {
      setProgress(((currentTime * 1000) / duration) * 100)
      // 设置为毫秒
      setCurrentPlayTime(currentTime * 1000)
    }
    let index = lyrics.length - 1
    for (let i = 0; i < lyrics.length; i++) {
      const lyric = lyrics[i]
      if (lyric.time > currentTime * 1000) {
        index = i - 1
        break
      }
    }
    if (index === lyricIndex || index === -1) return
    // console.log(lyrics[index]?.text)
    message.open({
      content: lyrics[index]?.text,
      key: 'lyric',
      duration: 0
    })
    dispatch(updateLyricIndex(index))
  }

  // slider进度修改后的回调函数
  const handleSliderAfterChange = (value: number) => {
    // 修改进度条
    setProgress(value)
    // 修改歌曲真实播放进度
    playerRef.current!.currentTime = (value / 100) * (duration / 1000)
    setIsSliding(false)
  }

  // 进度调拖动的回调
  const handleSliderChanging = (value: number) => {
    setIsSliding(true)
    setProgress(value)
    setCurrentPlayTime((value / 100) * duration)
  }

  return (
    <PlayerWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl playState={playState}>
          <button className="btn sprite_playbar prev"></button>
          <button
            className="btn sprite_playbar play"
            onClick={handlePlayMusic}
          ></button>
          <button className="btn sprite_playbar next"></button>
        </BarControl>
        <BarPlayInfo>
          <NavLink to="/discover/player">
            <img
              className="image"
              src={formatGetImg(currentSong.al?.picUrl, 50)}
              alt=""
            />
          </NavLink>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">{currentSong?.ar?.[0]?.name}</span>
            </div>
            <div className="progress-bar">
              <Slider
                tooltip={{ open: false }}
                value={progress}
                step={0.5}
                onAfterChange={handleSliderAfterChange}
                onChange={handleSliderChanging}
              />
              <div className="time">
                <span className="current">{formatTime(currentPlayTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </BarPlayInfo>
        <BarOperator>
          <div className="left">
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop"></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>
      <audio ref={playerRef} onTimeUpdate={handleTimeUpdate} />
    </PlayerWrapper>
  )
}

export default memo(AppPlayerBar)
