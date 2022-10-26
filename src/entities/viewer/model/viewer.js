import { createStore, createEvent, sample, createEffect } from 'effector/compat'
import { api } from 'shared/api'

export const $viewer = createStore({})
export const $IsAuthenticated = $viewer.map((data) => !!data.tokens)
export const $token = $viewer.map((data) =>
  data.tokens ? `Bearer ${data.tokens.accessToken}` : ''
)
export const updateViewer = createEvent()

// Set user data
$viewer.on(updateViewer, (_, payload) => payload)

// TEMPORARY SOLUTION
// Add an axios token on every request to the server
const setTokenAxiosFx = createEffect((token) => {
  api.interceptors.request.use((config) => {
    config.headers['Authorization'] = token
    return config
  })
})

sample({
  clock: $token,
  target: setTokenAxiosFx,
})

// $viewer.watch((data) => console.log('update User: ', data))
