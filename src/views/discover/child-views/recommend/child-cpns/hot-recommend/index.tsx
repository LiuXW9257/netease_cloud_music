import TitleToolbar from '@/components/title-toolbar'
import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { HotRecommendWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const keywords = ['华语', '流行', '摇滚', '民谣', '电子']
const HotRecommend: React.FC<IProps> = () => {
  return (
    <HotRecommendWrapper>
      <TitleToolbar
        title="热门推荐"
        keywords={keywords}
        more="更多"
        morePath="/discover/songs"
      />
    </HotRecommendWrapper>
  )
}

export default memo(HotRecommend)
