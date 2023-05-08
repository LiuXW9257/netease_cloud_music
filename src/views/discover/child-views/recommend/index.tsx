import req from '@/service'
import React, { memo, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
interface IBanner {
  imageUrl: string
}
const Recommend: React.FC<IProps> = () => {
  const [banners, setBanners] = useState<IBanner[]>([])

  useEffect(() => {
    req.get({ url: '/banner' }).then((res) => {
      console.log(res)
      setBanners(res.banners)
    })
  }, [])

  return (
    <div>
      {banners.map((item, index) => {
        return <h5 key={index}>{item.imageUrl}</h5>
      })}
    </div>
  )
}

export default memo(Recommend)
