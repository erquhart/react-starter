import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { Global } from '@emotion/react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import { AuthProvider, AuthContext } from 'context/auth'
import { DataProvider } from 'context/data'
import Auth from './auth'
import Head from './head'
import Nav from './nav'
import Main from './main'
import globalStyles from './global-styles'

const AuthenticatedApp = () => {
  const { ready, logout, isAuthenticated } = useContext(AuthContext)

  if (!ready) {
    return null
  }

  return (
    <>
      <Head/>
      <Global styles={globalStyles} />
      {!isAuthenticated && (
        <Auth/>
      )}
      {isAuthenticated && (
        <>
          <Nav onLogout={logout}>
            <NavLink to="/">Home</NavLink>
          </Nav>
          <Switch>
            <Route>
              <DataProvider>
                <Main/>
              </DataProvider>
            </Route>
          </Switch>
        </>
      )}
    </>
  )
}

const App = () => (
  <Router>
    <AuthProvider>
      <AuthenticatedApp />
    </AuthProvider>
  </Router>
)

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)
