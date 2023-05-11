import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { TitleWrapper } from './style'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  title?: string
  keywords?: any[]
  more?: string
  morePath?: string
}

const TitleToolbar: React.FC<IProps> = (props: IProps) => {
  return (
    <TitleWrapper className="sprite_02">
      <div className="left">
        <h2 className="title">{props.title}</h2>
        <ul className="keyword">
          {props.keywords?.map((item) => {
            return (
              <div className="item" key={item}>
                <span className="link">{item}</span>
                <span className="divider"> | </span>
              </div>
            )
          })}
        </ul>
      </div>
      {props.morePath && (
        <div className="right">
          <Link to={props.morePath}>{props.more}</Link>
          <i className="icon sprite_02"></i>
        </div>
      )}
    </TitleWrapper>
  )
}

export default memo(TitleToolbar)
