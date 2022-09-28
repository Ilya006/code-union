import React from 'react'
import { Button } from '../shared/ui/button'
import { withProvides } from './providers'
import './styles/index.css'

function App() {
  return <>
    <h2>hello</h2>
    <Button size='full' >Найти</Button>
  </>
}

const withProvide = withProvides(App)

export {withProvide as App}

