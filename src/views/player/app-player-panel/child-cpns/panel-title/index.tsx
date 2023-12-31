import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { CloseCircleOutlined } from '@ant-design/icons'
import { TitleWrapper } from './style'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { updateIsShowPanel } from '@/store/modules/player'
interface IProps {
  children?: ReactNode
}

const PanelTitle: React.FC<IProps> = () => {
  const { currentSong } = useAppSelector((state) => state.player)
  const dispatch = useAppDispatch()

  const handleClosePanel = () => {
    dispatch(updateIsShowPanel(false))
  }
  return (
    <TitleWrapper>
      <div className="left">
        <div className="play-list">播放列表({12})</div>
        <div className="operate">
          <div className="operate-item">
            <span className="icon sprite_playlist collect"></span>
            <span>收藏全部</span>
          </div>
          <div className="operate-item">
            <span className="icon sprite_playlist clean"></span>
            <span>清除</span>
          </div>
        </div>
      </div>
      <div className="right">
        <div>{currentSong?.name}</div>
        <div className="close-btn">
          <CloseCircleOutlined onClick={handleClosePanel} />
        </div>
      </div>
    </TitleWrapper>
  )
}

export default memo(PanelTitle)
