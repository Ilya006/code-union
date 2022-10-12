import React from 'react'
import { Routing } from 'pages/Router'
import { withProvides } from './providers'
import './styles/index.css'
import { AuthProvider } from './providers/AuthProvider'

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Routing />
      </div>
    </AuthProvider>
  )
}

const withProvide = withProvides(App)

export { withProvide as App }
