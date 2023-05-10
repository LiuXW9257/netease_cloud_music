import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './child-cpns/nav-bar'

interface IProps {
  children?: ReactNode
}

const Discover: React.FC<IProps> = () => {
  return (
    <div>
      <NavBar />

      <Outlet />
    </div>
  )
}

export default memo(Discover)
