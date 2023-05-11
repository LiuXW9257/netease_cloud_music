import React, { memo, useRef, useState } from 'react'
import type { ReactNode, ElementRef } from 'react'
import { shallowEqual } from 'react-redux'
import { useAppSelector } from '@/store/hooks'
import { Carousel } from 'antd'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'
import classNames from 'classnames'

interface IProps {
  children?: ReactNode
}
const bgImage =
  'http://p1.music.126.net/1uax24x40xIwZT-8A8hGBQ==/109951168603104038.jpg?imageView&blur=40x20'

const TopBanner: React.FC<IProps> = () => {
  const { banners } = useAppSelector(
    (state) => ({ banners: state.recommend.banners }),
    shallowEqual
  )
  // 获取轮播图element，使用其prev next方法控制轮播图切换
  const bannersRef = useRef<ElementRef<typeof Carousel>>(null)
  // 切换背景图片
  const [bgImg, setBgImg] = useState(bgImage)
  // 记录当前轮播节点
  const [currntBannerIndex, setCurrntBannerIndex] = useState(0)

  // 切换轮播图
  const handlerChangeBanner = (isPrev: boolean) => {
    if (isPrev) {
      bannersRef.current?.prev()
    } else {
      bannersRef.current?.next()
    }
  }

  // 轮播图即将切换的回调，修改背景
  const handleBeforeChange = (from: number, to: number) => {
    setCurrntBannerIndex(to)
    setBgImg(banners[to].imageUrl + '?imageView&blur=40x20')
  }

  return (
    <BannerWrapper
      style={{ background: `url('${bgImg}') center center / 6000px` }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            dots={false}
            ref={bannersRef}
            autoplay={true}
            effect="fade"
            beforeChange={handleBeforeChange}
          >
            {banners.map((item) => {
              return (
                <div key={item.imageUrl} className="banner-item">
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
          {/* 轮播图下方指标重写样式 */}
          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li key={item.imageUrl}>
                  <span
                    className={classNames('item', {
                      active: currntBannerIndex === index
                    })}
                  ></span>
                </li>
              )
            })}
          </ul>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button
            className="btn left"
            onClick={() => {
              handlerChangeBanner(true)
            }}
          ></button>
          <button
            className="btn right"
            onClick={() => {
              handlerChangeBanner(false)
            }}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
