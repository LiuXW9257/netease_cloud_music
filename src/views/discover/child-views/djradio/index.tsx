import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Djradio: React.FC<IProps> = () => {
  return <div>Djradio</div>
}

export default memo(Djradio)
