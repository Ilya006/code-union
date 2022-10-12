import { useMemo } from 'react'
import { useStore } from 'effector-react'
import { $IsAuthenticated, $token } from 'entities/viewer'
import { api, createAuthenticatedRequestHandler } from 'shared/api'
import axios from 'axios'

export const AuthProvider = ({ children }) => {
  const token = useStore($token)
  const isAuth = useStore($IsAuthenticated)

  useMemo(() => {
    api.interceptors.request.use(createAuthenticatedRequestHandler(token))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, isAuth])

  return children
}
