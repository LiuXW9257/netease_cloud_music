import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { RankingItemWrapper } from './style'
import { formatGetImg } from '@/utils/format'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  dataInfo: any
}

const RankingListItem: React.FC<IProps> = (props: IProps) => {
  const { dataInfo } = props
  return (
    <RankingItemWrapper>
      <div className="header">
        <div className="image">
          <img src={formatGetImg(dataInfo?.coverImgUrl, 80)} alt="" />
          {/* TODO 后期修改为Link */}
          <a href="" className="image_cover"></a>
        </div>
        <div className="info">
          <a href="">{dataInfo.name}</a>
          <div>
            <button className="btn sprite_02 play"></button>
            <button className="btn sprite_02 favor"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {dataInfo.tracks.slice(0, 10).map((item: any, index: number) => {
          return (
            <div key={item.id} className="list-item">
              <div className="rank">{index + 1}</div>
              <div className="info">
                <span className="name">{item.name}</span>
                <div className="operate">
                  <button className="btn sprite_02 play"></button>
                  <button className="btn sprite_icon2 addto"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="footer">
        <Link to={'/discover/ranking'}>查看全部 &gt;</Link>
      </div>
    </RankingItemWrapper>
  )
}

export default memo(RankingListItem)
