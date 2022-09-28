import React from 'react'
import { BrowserRouter } from 'react-router-dom'

export const withRouter = (component) => (props) => (
  <BrowserRouter>{component(props)}</BrowserRouter>
)