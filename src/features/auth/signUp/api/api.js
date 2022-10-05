import { createEffect } from 'effector/compat'
import { api } from 'shared/api'
import { routes } from './routes'
import { randomName } from '../lib'

// data = {email, password} from signUp-form
export const apiSignUpFx = createEffect((data) => {
  return api.post(routes.signUp(), {
    ...data,
    nickname: randomName(),
    phone: '77777777777',
  })
})

apiSignUpFx.done.watch((data) => {
  console.log(data)
})
