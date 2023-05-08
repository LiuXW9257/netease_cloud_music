import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Loading: React.FC<IProps> = () => {
  return <div>Loading...</div>
}

export default memo(Loading)
