// import req from '@/service'
import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

// interface IBanner {
//   imageUrl: string
// }

const Recommend: React.FC<IProps> = () => {
  // const [banners, setBanners] = useState<IBanner[]>([])

  return <div>Recommend</div>
}

export default memo(Recommend)
