import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { LyricPannelWrapper } from './style'
import { useAppSelector } from '@/store/hooks'
import LyricItem from './lyric-item'

interface IProps {
  children?: ReactNode
}

const LyricPanel: React.FC<IProps> = () => {
  const { lyrics, lyricIndex } = useAppSelector((state) => state.player)
  // console.log(lyrics)

  return (
    <LyricPannelWrapper>
      {lyrics.map((lyric, index) => {
        return (
          <LyricItem
            key={lyric.time}
            dataInfo={lyric}
            isCurrent={lyricIndex === index}
          />
        )
      })}
    </LyricPannelWrapper>
  )
}

export default memo(LyricPanel)
