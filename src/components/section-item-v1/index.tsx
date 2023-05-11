import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { ItemV1Wrapper } from './style'
import { formatCount, formatGetImg } from '@/utils/format'

interface IProps {
  children?: ReactNode
  dataInfo?: any
}

// 该组件是类似于热门推荐列表中的给每个子元素的抽取
const SectionItemV1: React.FC<IProps> = (props: IProps) => {
  const { dataInfo } = props
  return (
    <ItemV1Wrapper>
      <div className="cover-top">
        {/* 优化图片获取 */}
        <img src={formatGetImg(dataInfo.picUrl, 140)} alt="" />
        {/* <img src={dataInfo.picUrl} alt="" /> */}
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset"></i>
              {formatCount(dataInfo.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">{dataInfo.name}</div>
    </ItemV1Wrapper>
  )
}

export default memo(SectionItemV1)
