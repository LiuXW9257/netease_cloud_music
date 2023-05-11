import React, { memo, useEffect } from 'react'
import type { ReactNode } from 'react'
import { fetchRecommendData } from '@/store/modules/recommend'
import { useAppDispatch } from '@/store/hooks'
import TopBanner from './child-cpns/top-banner'
import HotRecommend from './child-cpns/hot-recommend'
import { RecommendLeft, RecommendSection } from './style'

interface IProps {
  children?: ReactNode
}

const Recommend: React.FC<IProps> = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchRecommendData())
  }, [])

  return (
    <div>
      <TopBanner />
      <RecommendSection className="wrap-v2">
        <RecommendLeft>
          <HotRecommend />
        </RecommendLeft>
      </RecommendSection>
    </div>
  )
}

export default memo(Recommend)
