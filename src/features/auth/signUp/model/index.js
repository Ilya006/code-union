import { createEffect, createStore, sample } from 'effector/compat'
import { signUp } from '../api'
import { errorCodes } from '../lib'

export const $signUpError = createStore({})
export const $viewer = createStore({})
export const handleSubmitFx = createEffect(signUp)

// Catch error
sample({
  clock: handleSubmitFx.failData,
  fn: (_, data) => {
    const message = data.response.data.message
    return { [errorCodes[message].to]: errorCodes[message].message }
  },
  target: $signUpError,
})

// Successful user registration
sample({
  clock: handleSubmitFx.doneData,
  target: $viewer,
})

$signUpError.watch((data) => {
  console.log(data)
})

$viewer.watch((data) => console.log(data))
