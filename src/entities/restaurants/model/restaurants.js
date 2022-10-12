import { createStore, createEffect, sample, createEvent } from 'effector/compat'
import { fetchRestaurants } from '../api'

export const fetchRestaurantsFx = createEffect(fetchRestaurants)
export const $allRestaurants = createStore([])

export const getRestaurants = createEvent()

// Get restaurants
sample({
  clock: getRestaurants,
  fn: (data) => data ?? { page: 1, perPage: 10 },
  target: fetchRestaurantsFx,
})

sample({
  clock: fetchRestaurantsFx.doneData,
  fn: (_, res) => res.data.restaurants,
  target: $allRestaurants,
})

// $allRestaurants.watch((data) => console.log(data))
