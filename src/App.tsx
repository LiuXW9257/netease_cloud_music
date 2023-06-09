import React, { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

import { useAppDispatch, useAppSelector } from './store/hooks'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import AppPlayerBar from './views/player/app-player-bar'
import { fetchCurrentSong } from './store/modules/player'
import AppPlayerPanel from './views/player/app-player-panel'

function App() {
  const outlet = useRoutes(routes)
  const dispatch = useAppDispatch()
  const { isShowPanel } = useAppSelector((state) => state.player)

  useEffect(() => {
    dispatch(fetchCurrentSong(447926067))
  }, [])

  return (
    <div>
      <AppHeader />
      {outlet}
      {isShowPanel && <AppPlayerPanel />}
      <AppPlayerBar />
      <AppFooter />
    </div>
  )
}

export default App
