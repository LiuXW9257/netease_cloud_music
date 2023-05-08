import React, { Suspense, lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Loading from '@/base-ui/loading'

// 一级路由
const Discover = lazy(() => import('@/views/discover'))
const Mine = lazy(() => import('@/views/mine'))
const Focus = lazy(() => import('@/views/focus'))
const Download = lazy(() => import('@/views/download'))

// discover 二级路由
const Recommend = lazy(() => import('@/views/discover/child-views/recommend'))
const Ranking = lazy(() => import('@/views/discover/child-views/ranking'))
const Songs = lazy(() => import('@/views/discover/child-views/songs'))
const Djradio = lazy(() => import('@/views/discover/child-views/djradio'))
const Artist = lazy(() => import('@/views/discover/child-views/artist'))
const Album = lazy(() => import('@/views/discover/child-views/album'))

const lazyLoad = (RC: React.FC) => {
  return (
    <Suspense fallback={<Loading />}>
      <RC />
    </Suspense>
  )
}

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: lazyLoad(Discover),
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        element: lazyLoad(Recommend)
      },
      {
        path: '/discover/ranking',
        element: lazyLoad(Ranking)
      },
      {
        path: '/discover/songs',
        element: lazyLoad(Songs)
      },
      {
        path: '/discover/djradio',
        element: lazyLoad(Djradio)
      },
      {
        path: '/discover/artist',
        element: lazyLoad(Artist)
      },
      {
        path: '/discover/album',
        element: lazyLoad(Album)
      }
    ]
  },
  {
    path: '/mine',
    element: lazyLoad(Mine)
  },
  {
    path: '/focus',
    element: lazyLoad(Focus)
  },
  {
    path: '/download',
    element: lazyLoad(Download)
  }
]

export default routes
