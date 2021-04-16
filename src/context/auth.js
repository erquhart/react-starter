import React, { useState, useEffect } from 'react'
import * as netlifyIdentity from 'netlify-identity-widget'

const AuthContext = React.createContext({})

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(null)
  const [ready, setReady] = useState(false)

  useEffect(async () => {
    netlifyIdentity.init()
    netlifyIdentity.on('login', () => {
      window.location.reload()
    })
    netlifyIdentity.on('logout', () => {
      setIsAuthenticated(false)
      setUser(null)
    })
    netlifyIdentity.on('error', () => {
      netlifyIdentity.logout()
    })
    const currentUser = getUser()
    setIsAuthenticated(Boolean(currentUser))
    setUser(currentUser)
    setReady(true)

    return () => {
      netlifyIdentity.off('login')
      netlifyIdentity.off('logout')
      netlifyIdentity.off('error')
    }
  }, [])

  useEffect(async () => {}, [ready])

  function getUser() {
    const currentUser = netlifyIdentity.currentUser()
    return currentUser ? { id: currentUser.id, email: currentUser.email } : null
  }
  function getToken() {
    return netlifyIdentity.currentUser()?.jwt()
  }
  async function logout() {
    netlifyIdentity.logout()
  }

  const context = {
    ready,
    user,
    getToken,
    getUser,
    isAuthenticated,
    logout,
  }

  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
