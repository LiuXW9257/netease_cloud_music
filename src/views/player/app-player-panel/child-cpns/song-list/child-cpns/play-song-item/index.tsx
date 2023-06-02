import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { SongItemWrapper } from './style'
import { formatTime } from '@/utils/format'
import { useAppDispatch } from '@/store/hooks'
import { fetchCurrentSong } from '@/store/modules/player'

interface IProps {
  children?: ReactNode
  dataInfo: any
}

const PlaySongItem: React.FC<IProps> = (props: IProps) => {
  const { dataInfo } = props
  const dispatch = useAppDispatch()

  function handlePlaySelect() {
    // 点击播放歌曲
    dispatch(fetchCurrentSong(dataInfo.id))
  }
  function handleFavor(e: React.MouseEvent) {
    console.log('点击了 favor')
    // 阻止事件冒泡，防止点击了 favor 后自动播放该歌曲
    e.stopPropagation()
  }
  return (
    <SongItemWrapper onClick={handlePlaySelect}>
      <div className="left">
        <div className="song-name">{dataInfo.name}</div>
        <div className="operate">
          <div
            className="btn sprite_playlist favor"
            onClick={(e) => {
              handleFavor(e)
            }}
          ></div>
          <div className="btn sprite_playlist share"></div>
          <div className="btn sprite_playlist download"></div>
          <div className="btn sprite_playlist delete"></div>
        </div>
      </div>
      <div className="right">
        <div className="song-artist">{dataInfo.ar[0].name}</div>
        <div className="song-time">{formatTime(dataInfo.dt)}</div>
        <div className="sprite_playlist  song-list-link"></div>
      </div>
    </SongItemWrapper>
  )
}

export default memo(PlaySongItem)
