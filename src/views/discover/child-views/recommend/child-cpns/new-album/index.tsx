import React, { memo, useRef } from 'react'
import type { ReactNode, ElementRef } from 'react'
import { AlbumWrapper } from './style'
import TitleToolbar from '@/components/title-toolbar'
import { Carousel } from 'antd'
import { useAppSelector } from '@/store/hooks'
import SectionItemV2 from '@/components/section-item-v2'

interface IProps {
  children?: ReactNode
}

const NewAlbum: React.FC<IProps> = () => {
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const { newAlbums } = useAppSelector((state) => state.recommend)
  // 点击切换轮播图
  const handleChangeBanner = (isPrev: boolean) => {
    if (isPrev) {
      bannerRef.current?.prev()
    } else {
      bannerRef.current?.next()
    }
  }
  return (
    <AlbumWrapper>
      <TitleToolbar title="新碟上架" more="更多" morePath="/discover/album" />
      <div className="content">
        <button
          className="sprite_02 arrow arrow-left"
          onClick={() => {
            handleChangeBanner(true)
          }}
        ></button>
        <div className="album">
          <Carousel ref={bannerRef} speed={1500}>
            {[0, 1].map((item) => {
              return (
                <div key={item}>
                  <div className="new-album-list">
                    {newAlbums.slice(item * 5, (item + 1) * 5).map((album) => {
                      return <SectionItemV2 key={album.id} dataInfo={album} />
                    })}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
        <button
          className="sprite_02 arrow arrow-right"
          onClick={() => {
            handleChangeBanner(false)
          }}
        ></button>
      </div>
    </AlbumWrapper>
  )
}

export default memo(NewAlbum)
