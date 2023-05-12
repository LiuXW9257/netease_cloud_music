import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { RankingWrapper } from './style'
import TitleToolbar from '@/components/title-toolbar'
import RankingListItem from '../ranking-list-item'
import { useAppSelector } from '@/store/hooks'

interface IProps {
  children?: ReactNode
}

const RankingList: React.FC<IProps> = () => {
  const { rankings } = useAppSelector((state) => state.recommend)
  return (
    <RankingWrapper>
      <TitleToolbar title="榜单" more="更多" morePath="/discover/ranking" />
      <div className="content">
        {rankings.map((item) => {
          return <RankingListItem key={item.id} dataInfo={item} />
        })}
      </div>
    </RankingWrapper>
  )
}

export default memo(RankingList)
