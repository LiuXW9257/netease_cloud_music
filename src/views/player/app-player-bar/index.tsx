import React, { memo, useRef, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { shallowEqual } from 'react-redux'
import { Slider } from 'antd'
import { BarControl, BarOperator, BarPlayInfo, PlayerWrapper } from './style'
import { useAppSelector } from '@/store/hooks'
import { formatGetImg, formatTime } from '@/utils/format'
import { getMusicResouceById } from '@/utils/player'

interface IProps {
  children?: ReactNode
}

const AppPlayerBar: React.FC<IProps> = () => {
  const { currentSong } = useAppSelector((state) => state.player, shallowEqual)

  const playerRef = useRef<HTMLAudioElement>(null)
  // 歌曲播放状态 true 正在播放 false 没有播放
  const [playState, setPlayState] = useState(false)
  // 歌曲总时长
  const [duration, setDuration] = useState(0)
  // 歌曲进度
  const [progress, setProgress] = useState(0)
  // 当前播放时长
  const [currentPlayTime, setCurrentPlayTime] = useState(0)

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

  // 控制进度条
  const handleTimeUpdate = () => {
    const currentTime = playerRef.current?.currentTime ?? 0

    setProgress(((currentTime * 1000) / duration) * 100)
    // 设置为毫秒
    setCurrentPlayTime(currentTime * 1000)
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
              src={formatGetImg(currentSong.al.picUrl, 50)}
              alt=""
            />
          </NavLink>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">{currentSong?.ar[0]?.name}</span>
            </div>
            <div className="progress-bar">
              <Slider tooltip={{ open: false }} value={progress} step={0.5} />
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
