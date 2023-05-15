import React, { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

import { useAppDispatch } from './store/hooks'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import AppPlayerBar from './views/player/app-player-bar'
import { fetchCurrentSong } from './store/modules/player'

function App() {
  const outlet = useRoutes(routes)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCurrentSong(202369))
  }, [])

  return (
    <div>
      <AppHeader />
      {outlet}
      <AppPlayerBar />
      <AppFooter />
    </div>
  )
}

export default App
