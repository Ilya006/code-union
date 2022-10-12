import { createStore, createEvent, sample } from 'effector/compat'

export const $viewer = createStore({})
export const $IsAuthenticated = $viewer.map((data) => !!data.tokens)
export const $token = $viewer.map((data) =>
  data.tokens ? data.tokens.accessToken : ''
)
export const updateViewer = createEvent()

// Update user data
sample({
  clock: updateViewer,
  target: $viewer,
})

// $viewer.watch((data) => console.log('update User', data))
