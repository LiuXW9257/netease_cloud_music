import React from 'react'
import { Link, useRoutes } from 'react-router-dom'
import routes from './router'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { updateName } from './store/modules/counter'

function App() {
  const outlet = useRoutes(routes)
  const { count, name } = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()

  const handleUpdateName = () => {
    dispatch(updateName('呵呵呵'))
  }

  return (
    <div>
      <h1>{count}</h1>
      <h1>{name}</h1>
      <button onClick={handleUpdateName}>修改name</button>
      <Link to="/discover">发现音乐</Link>
      <Link to="/mine">我的音乐</Link>
      <Link to="/focus">关注</Link>
      <Link to="/download">下载客户端</Link>
      {outlet}
    </div>
  )
}

export default App
