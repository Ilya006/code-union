import { createEffect, createEvent, createStore, sample } from 'effector/compat'
import { updateViewer } from 'entities/viewer'
import { signIn } from '../api'
import { errorCodes } from '../lib'

export const handleSubmitFx = createEffect(signIn)
export const $signInError = createStore({})
export const $isDoneSignIn = createStore(false)
export const $signUpLoad = handleSubmitFx.pending
export const resetIsDone = createEvent()

// Successful user sign in
sample({
  clock: handleSubmitFx.doneData,
  fn: (_, res) => res.data,
  target: updateViewer,
})

// Catch error
sample({
  clock: handleSubmitFx.failData,
  fn: (_, data) => {
    const message = data.response.data.message
    return errorCodes[message] || { signInError: 'Неизвестная ошибка' }
  },
  target: $signInError,
})

// Set done
sample({
  clock: handleSubmitFx.doneData,
  fn: (_, res) => !!res.data,
  target: $isDoneSignIn,
})

// CLear error
$signInError.reset(handleSubmitFx)

// Reset isDoneSignIn
$isDoneSignIn.reset(resetIsDone)
