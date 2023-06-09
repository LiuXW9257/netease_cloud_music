import React, { memo, useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { LyricPannelWrapper } from './style'
import { useAppSelector } from '@/store/hooks'
import LyricItem from './lyric-item'

interface IProps {
  children?: ReactNode
}

const LyricPanel: React.FC<IProps> = () => {
  const { lyrics, lyricIndex } = useAppSelector((state) => state.player)
  const lyricPanelEl = useRef<HTMLDivElement>(null)
  const [topGap, setTopGap] = useState(0)
  // console.log(lyrics)

  const handlePanel = () => {
    // 获取当前歌词与顶部的高度
    console.dir(lyricPanelEl.current)
    const panel = lyricPanelEl.current
    panel!.scrollTop = topGap
    setTopGap(topGap + 50)
  }

  useEffect(() => {
    // 获取当前歌词所在的 div
    const currentLyricItemEl = lyricPanelEl.current!.children[lyricIndex]
    if (currentLyricItemEl) {
      // 计算到顶部的距离
      const gap = (currentLyricItemEl as HTMLDivElement).offsetTop
      // console.log(gap)
      // 向下移动歌词面板
      const panel = lyricPanelEl.current
      panel!.scrollTo({
        top: gap - 88,
        behavior: 'smooth'
      })
    }
  }, [lyricIndex])

  return (
    <LyricPannelWrapper ref={lyricPanelEl} onClick={handlePanel}>
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
