import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app/App'

const container = document.getElementById('root')
createRoot(container).render(<App />)
