import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Download: React.FC<IProps> = () => {
  return <div>Download</div>
}

export default memo(Download)
