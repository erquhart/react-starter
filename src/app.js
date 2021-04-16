import React from 'react'
import ReactDOM from 'react-dom'
import { Global } from '@emotion/react'
import Head from './head'
import globalStyles from './global-styles'

const App = () => {
  return (
    <>
      <Head />
      <Global styles={globalStyles} />
      <h1>👋🌎</h1>
    </>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)
