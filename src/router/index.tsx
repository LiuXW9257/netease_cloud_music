import React from 'react'
import { RouteObject } from 'react-router-dom'
import Discover from '@/views/discover'
import Home from '@/views/home'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/discover',
    element: <Discover />
  }
]

export default routes
