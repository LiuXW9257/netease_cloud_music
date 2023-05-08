import React from 'react'
import { Link, useRoutes } from 'react-router-dom'
import routes from './router'
import { useAppSelector } from './store/hooks'

function App() {
  const outlet = useRoutes(routes)
  const { count } = useAppSelector((state) => state.counter)

  return (
    <div>
      <h1>{count}</h1>
      <Link to="/discover">发现音乐</Link>
      <Link to="/mine">我的音乐</Link>
      <Link to="/focus">关注</Link>
      <Link to="/download">下载客户端</Link>
      {outlet}
    </div>
  )
}

export default App
