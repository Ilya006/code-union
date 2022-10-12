export const createAuthenticatedRequestHandler = (token) => (config) => {
  const headers = config.headers || {}

  headers.Authorization = token

  return { ...config, headers }
}
