import React, { memo, useEffect } from 'react'
import type { ReactNode } from 'react'
import { fetchRecommendData } from '@/store/modules/recommend'
import { useAppDispatch } from '@/store/hooks'
import TopBanner from './child-cpns/top-banner'

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
    </div>
  )
}

export default memo(Recommend)
