import React, { Suspense, lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const Discover = lazy(() => import('@/views/discover'))
const Mine = lazy(() => import('@/views/mine'))
const Focus = lazy(() => import('@/views/focus'))
const Download = lazy(() => import('@/views/download'))

const lazyLoad = (RC: React.FC) => {
  return (
    <Suspense>
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
    element: lazyLoad(Discover)
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
