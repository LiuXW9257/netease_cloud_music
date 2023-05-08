import React from 'react'
import { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Discover from '@/views/discover'
import Mine from '@/views/mine'
import Focus from '@/views/focus'
import Download from '@/views/download'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/download',
    element: <Download />
  }
]

export default routes
