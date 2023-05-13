import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import AppPlayerBar from './views/player/app-player-bar'

function App() {
  const outlet = useRoutes(routes)

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
