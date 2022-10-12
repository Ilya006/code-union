import React, { useMemo } from 'react'
import { useStore } from 'effector-react'
import { $IsAuthenticated, $token } from 'entities/viewer'
import { api, createAuthenticatedRequestHandler } from 'shared/api'

export const AuthProvider = ({ children }) => {
  const token = useStore($token)
  const isAuth = useStore($IsAuthenticated)

  useMemo(() => {
    api.interceptors.request.use(createAuthenticatedRequestHandler(token))
  }, [token, isAuth])

  return children
}
