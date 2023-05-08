import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Artist: React.FC<IProps> = () => {
  return <div>Artist</div>
}

export default memo(Artist)
