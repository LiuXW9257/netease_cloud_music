import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Template: React.FC<IProps> = () => {
  return <div>Template</div>
}

export default memo(Template)
