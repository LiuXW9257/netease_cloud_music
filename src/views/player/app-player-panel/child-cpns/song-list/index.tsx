import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { ListWrapper } from './style'
import { useAppSelector } from '@/store/hooks'
import PlaySongItem from './child-cpns/play-song-item'

interface IProps {
  children?: ReactNode
}

const SongList: React.FC<IProps> = () => {
  const { playSongList } = useAppSelector((state) => state.player)

  return (
    <ListWrapper>
      {playSongList.map((item) => {
        return <PlaySongItem key={item.id} dataInfo={item} />
      })}
    </ListWrapper>
  )
}

export default memo(SongList)
