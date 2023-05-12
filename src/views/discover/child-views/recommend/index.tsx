import React, { memo, useEffect } from 'react'
import type { ReactNode } from 'react'
import {
  fetchRecommendData,
  fetchRecommendRankingData
} from '@/store/modules/recommend'
import { useAppDispatch } from '@/store/hooks'
import TopBanner from './child-cpns/top-banner'
import HotRecommend from './child-cpns/hot-recommend'
import { RecommendLeft, RecommendSection } from './style'
import NewAlbum from './child-cpns/new-album'
import RankingList from './child-cpns/ranking-list'

interface IProps {
  children?: ReactNode
}

const Recommend: React.FC<IProps> = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchRecommendData())
    dispatch(fetchRecommendRankingData())
  }, [])

  return (
    <div>
      <TopBanner />
      <RecommendSection className="wrap-v2">
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
          <RankingList />
        </RecommendLeft>
      </RecommendSection>
    </div>
  )
}

export default memo(Recommend)
