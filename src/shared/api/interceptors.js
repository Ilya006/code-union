export const createAuthenticatedRequestHandler = (token) => (config) => {
  debugger
  const headers = config.headers || {}

  headers.Authorization = token

  console.log('token:', token)

  return { ...config, headers }
}
