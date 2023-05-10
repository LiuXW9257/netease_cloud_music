import React, { memo } from 'react'
import type { ReactNode } from 'react'

import { discoverMenu } from '@/assets/data/local_data'
import { NavBarWrapper } from './style'
import { NavLink } from 'react-router-dom'
interface IProps {
  children?: ReactNode
}

const NavBar: React.FC<IProps> = () => {
  return (
    <NavBarWrapper>
      <div className="wrap-v1 nav">
        {discoverMenu.map((item) => {
          return (
            <div className="item" key={item.title}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          )
        })}
      </div>
    </NavBarWrapper>
  )
}

export default memo(NavBar)
