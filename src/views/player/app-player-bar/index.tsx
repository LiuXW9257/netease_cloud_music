import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { BarControl, BarOperator, BarPlayInfo, PlayerBarWrapper } from './style'
import { NavLink } from 'react-router-dom'
import { Slider } from 'antd'

interface IProps {
  children?: ReactNode
}

const AppPlayerBar: React.FC<IProps> = () => {
  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl>
          <button className="btn sprite_playbar prev"></button>
          <button className="btn sprite_playbar play"></button>
          <button className="btn sprite_playbar next"></button>
        </BarControl>
        <BarPlayInfo>
          <NavLink to={'/discover/player'}>
            <img
              src="https://p2.music.126.net/OVkXDNmbk2uj6wE1KTZIwQ==/109951165203334337.jpg?param=34y34"
              alt=""
            />
          </NavLink>
          <div className="info">
            <div className="song">
              <span className="song-name">song-name</span>
              <span className="singer-name">singer-name</span>
            </div>
            <div className="progress">
              <Slider />
              <div className="time">
                <span className="current">00:45</span>
                <span className="divider">/</span>
                <span className="duration">04:33</span>
              </div>
            </div>
          </div>
        </BarPlayInfo>
        <BarOperator>
          <div className="left">
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop"></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>
    </PlayerBarWrapper>
  )
}

export default memo(AppPlayerBar)
