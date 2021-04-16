import { useContext } from 'react'
import { omit } from 'lodash'
import axios from 'axios'
import { AuthContext } from 'context/auth'

export default function useFunction() {
  const { getToken } = useContext(AuthContext)

  async function callFunction(name, opts = {}) {
    const token = opts.token || (getToken && (await getToken()))
    const headers = {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(opts.headers || {}),
    }
    const [functionName, endpoint] = name.split('/')
    const url = `/.netlify/functions/${functionName}`
    const params = {
      ...(endpoint ? { endpoint } : {}),
      ...opts.params,
    }
    return axios({
      url,
      headers,
      params,
      ...omit(opts, 'params'),
    })
  }
  return callFunction
}
