import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import type { ReactNode } from 'react'
import { HeaderLeft, HeaderWrapper } from './style'
import menuList from '@/assets/data/header_titles.json'

interface IProps {
  children?: ReactNode
}
interface TitleType {
  title: string
  type: string
  link: string
}

const AppHeader: React.FC<IProps> = () => {
  const showItem = (item: TitleType) => {
    if (item.type === 'path') {
      return (
        <NavLink
          to={item.link}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      )
    } else if (item.type === 'link') {
      return (
        <a href={item.link} rel="noreferrer" target="_blank">
          {item.title}
        </a>
      )
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a className="logo sprite_01" href="#/">
            网易云音乐
          </a>
          <div className="select-list">
            {menuList.map((item) => {
              return (
                <div className="select-item" key={item.title}>
                  {showItem(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
