import { createStore, createEffect, sample, createEvent } from 'effector/compat'
import { fetchRestaurants } from '../api'

const fetchRestaurantsFx = createEffect(fetchRestaurants)

export const $allRestaurants = createStore([])
export const $showRestaurantsId = createStore([])
const $isFiltering = createStore(true)

export const getRestaurants = createEvent()
export const setIsFiltering = createEvent()
const setAllRestaurants = createEvent()
const setShowRestaurantsId = createEvent()

// Get restaurants
sample({
  clock: getRestaurants,
  fn: (data) => data ?? { page: 1, perPage: 10 },
  target: fetchRestaurantsFx,
})

sample({
  clock: fetchRestaurantsFx.doneData,
  filter: (_, res) => res.data.restaurants.length > 0,
  fn: (_, res) => res.data.restaurants,
  target: setAllRestaurants
})

$allRestaurants.on(setAllRestaurants, (store, payload) => ([...store, ...payload]))


// Show all Restaurants
sample({
  clock: $allRestaurants,
  source: $isFiltering,
  filter: (sourseData) => sourseData,
  fn: (_, data) => data.map(item => item.id),
  target: setShowRestaurantsId
})

$showRestaurantsId.on(setShowRestaurantsId, (store, payload) => payload)


// Change the filtering flag
$isFiltering.on(setIsFiltering, (_, payload) => payload)


$allRestaurants.watch((data) => console.log('all Restaurants', data))
$showRestaurantsId.watch((data) => console.log('$showRestaurantsId', data))
