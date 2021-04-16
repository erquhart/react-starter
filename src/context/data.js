import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import useFunction from 'hooks/use-function'

const onSnapshotErrorHandler = (err) => {
  console.error('A Firestore snapshot listener encountered an error.')
  console.error(err)
}

const DataContext = React.createContext({})

const DataProvider = ({ children }) => {
  const [ready, setReady] = useState(false)
  const [data, setData] = useState({})
  const callFunction = useFunction()

  const authFirebase = async () => {
    const { data: firebaseToken } = await callFunction('auth/firebase')
    if (!firebaseToken) {
      throw Error('Firebase authentication failed.')
    }
    await firebase.auth().signInWithCustomToken(firebaseToken)
  }

  useEffect(() => {
    (async () => {
      if (!firebase.apps.length) {
        firebase.initializeApp({
          databaseUrl: process.env.FIREBASE_DATABASE_URL,
          apiKey: process.env.FIREBASE_API_KEY,
          projectId: 'new-money-app-3ab35',
        })
      }

      // Initial auth, and then re-auth every 30 minutes. Firebase does not
      // provide a method for detecting unauth when issuing our own tokens
      // through the SDK.
      await authFirebase()
      const firebaseAuthRefreshInterval = setInterval(
        authFirebase,
        30 * 60 * 1000
      )

      const newListeners = {
        data: {
          unsubscribe: firebase
            .database()
            .ref('data')
            .on('value', (snapshot) => {
              if (snapshot.exists()) {
                setData(snapshot.val())
              }
            }, onSnapshotErrorHandler),
        },
      }

      return () => {
        clearInterval(firebaseAuthRefreshInterval)
        Object.values(newListeners).forEach(({ unsubscribe }) => unsubscribe())
      }
    })()
  }, [])

  useEffect(() => {
    if (data) {
      setReady(true)
    }
  }, [data])

  const context = {
    data,
  }

  return (
    ready && (
      <DataContext.Provider value={context}>{children}</DataContext.Provider>
    )
  )
}

export { DataContext, DataProvider }
