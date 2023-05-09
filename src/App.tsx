import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'

function App() {
  const outlet = useRoutes(routes)

  return (
    <div>
      <AppHeader />
      {outlet}
      <AppFooter />
    </div>
  )
}

export default App
