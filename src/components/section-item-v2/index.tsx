import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { ItemV2Wrapper } from './style'
import { formatGetImg } from '@/utils/format'

interface IProps {
  children?: ReactNode
  dataInfo: any
}

// 该组件是类似于新碟上架列表中的给每个子元素的抽取
const SectionItemV2: React.FC<IProps> = (props: IProps) => {
  const { dataInfo } = props

  return (
    <ItemV2Wrapper>
      <div className="top">
        <img src={formatGetImg(dataInfo.picUrl, 100)} alt="" />
        {/* 图片连接 */}
        <a className="cover sprite_cover">{dataInfo.name}</a>
      </div>
      <div className="bottom">
        <div className="name">{dataInfo.name}</div>
        <div className="artist">{dataInfo.artist.name}</div>
      </div>
    </ItemV2Wrapper>
  )
}

export default memo(SectionItemV2)
