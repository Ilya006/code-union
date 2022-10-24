import { createStore, createEffect, sample, createEvent } from 'effector/compat'
import { fetchRestaurants } from '../api'

export const fetchRestaurantsFx = createEffect(fetchRestaurants)
export const $allRestaurants = createStore([])
export const $showRestaurantsId = createStore([])
export const $isFiltering = createStore(true)

export const getRestaurants = createEvent()
export const setIsFiltering = createEvent()

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

// Show all Restaurants
sample({
  clock: [$allRestaurants],
  source: $isFiltering,
  filter: (sourseData) => sourseData, 
  fn: (_, data) => data.map(item => item.id),
  target: $showRestaurantsId
})

// Change the filtering flag
sample({
  clock: setIsFiltering,
  target: $isFiltering
})


$allRestaurants.watch((data) => console.log('all Restaurants', data))
$showRestaurantsId.watch((data) => console.log('$showRestaurantsId', data))
