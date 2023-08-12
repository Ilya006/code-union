import { api } from 'shared/api'
import { routes } from './routes'

export const signIn = (data) => {
  return api.post(routes.signIn(), data)
}
