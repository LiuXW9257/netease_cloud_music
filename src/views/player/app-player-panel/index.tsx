import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { PlayerPanelWrapper } from './style'
import LyricPanel from './child-cpns/lyric-panel'
import SongList from './child-cpns/song-list'
import PanelTitle from './child-cpns/panel-title'

interface IProps {
  children?: ReactNode
}

const AppPlayerPanel: React.FC<IProps> = () => {
  return (
    <PlayerPanelWrapper>
      <PanelTitle />
      <div className="content">
        <div className="left">
          <SongList />
        </div>
        <div className="right">
          <LyricPanel />
        </div>
      </div>
    </PlayerPanelWrapper>
  )
}

export default memo(AppPlayerPanel)
