import { createEffect, createEvent, createStore, sample } from 'effector/compat'
import { updateViewer } from 'entities/viewer'
import { signUp } from '../api'
import { errorCodes } from '../lib'

export const handleSubmitFx = createEffect(signUp)
export const $signUpError = createStore({})
export const $isDoneSignUp = createStore(false)
export const $signUpLoad = handleSubmitFx.pending
export const resetIsDone = createEvent()

// Catch error
sample({
  clock: handleSubmitFx.failData,
  fn: (_, data) => {
    const message = data.response.data.message
    return errorCodes[message] || { signUpError: 'Неизвестная ошибка' }
  },
  target: $signUpError,
})

// Successful user registration
sample({
  clock: handleSubmitFx.doneData,
  fn: (_, res) => res.data,
  target: updateViewer,
})

// Set isDone
sample({
  clock: handleSubmitFx.doneData,
  fn: (_, res) => !!res.data,
  target: $isDoneSignUp,
})

// CLeaer error
$signUpError.reset(handleSubmitFx)

// Reser isDone
$isDoneSignUp.reset(resetIsDone)
