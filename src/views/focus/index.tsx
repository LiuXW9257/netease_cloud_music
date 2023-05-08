import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Focus: React.FC<IProps> = () => {
  return <div>Focus</div>
}

export default memo(Focus)
