import TitleToolbar from '@/components/title-toolbar'
import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { HotRecommendWrapper } from './style'
import { useAppSelector } from '@/store/hooks'
import SectionItemV1 from '@/components/section-item-v1'

interface IProps {
  children?: ReactNode
}

const keywords = ['华语', '流行', '摇滚', '民谣', '电子']
const HotRecommend: React.FC<IProps> = () => {
  const { hotRecommends } = useAppSelector((state) => state.recommend)

  return (
    <HotRecommendWrapper>
      <TitleToolbar
        title="热门推荐"
        keywords={keywords}
        more="更多"
        morePath="/discover/songs"
      />
      <div className="recommend-list">
        {hotRecommends.map((item) => {
          return <SectionItemV1 key={item.id} dataInfo={item} />
        })}
      </div>
    </HotRecommendWrapper>
  )
}

export default memo(HotRecommend)
