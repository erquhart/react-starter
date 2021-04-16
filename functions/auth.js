const admin = require('firebase-admin')

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)
    ),
  })
}

const unauthResponse = {
  statusCode: 401,
  body: 'Unauthorized',
}

exports.handler = async (event, context) => {
  const { user } = context.clientContext
  if (!user) {
    // 401 if the user isn't already authenticated through Netlify Identity
    return unauthResponse
  }

  switch (event.queryStringParameters.endpoint) {
    case 'firebase': {
      const token = await admin.auth().createCustomToken(user.sub)
      return {
        statusCode: 200,
        body: token,
      }
    }
  }

  return unauthResponse
}
