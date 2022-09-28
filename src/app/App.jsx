import React from 'react'
import { Routing } from 'pages/Router'
import { withProvides } from './providers'
import './styles/index.css'

function App() {
  return (
    <div className="app">
      <Routing />
    </div>
  )
}

const withProvide = withProvides(App)

export { withProvide as App }
