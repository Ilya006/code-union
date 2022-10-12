import { api } from 'shared/api'
import { routes } from './routes'
import { randomNick } from '../lib'

// data = {email, password} from signUp-form
export const signUp = (data) => {
  return api.post(routes.signUp(), {
    ...data,
    nickname: randomNick(),
    phone: '77777777777',
  })
}
