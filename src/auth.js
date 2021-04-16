import React from 'react'
import * as netlifyIdentity from 'netlify-identity-widget'
import { Button } from 'ui/button'

const Auth = () => {
  return (
    <Button onClick={() => netlifyIdentity.open()}>
      Log in
    </Button>
  )
}

export default Auth
