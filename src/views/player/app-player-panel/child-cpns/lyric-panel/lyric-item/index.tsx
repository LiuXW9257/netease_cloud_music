import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { LyricItemWrapper } from './style'

interface IProps {
  children?: ReactNode
  isCurrent: boolean
  dataInfo: {
    text: string
    time: number
  }
}

const LyricItem: React.FC<IProps> = (props: IProps) => {
  const { dataInfo, isCurrent } = props

  return (
    <LyricItemWrapper isCurrent={isCurrent}>
      <p>{dataInfo.text}</p>
    </LyricItemWrapper>
  )
}

export default memo(LyricItem)
