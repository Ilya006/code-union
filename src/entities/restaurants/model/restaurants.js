import { createStore, createEffect, sample, createEvent } from 'effector/compat'
import { fetchRestaurants } from '../api'

const fetchRestaurantsFx = createEffect(fetchRestaurants)

export const $allRestaurants = createStore([])
export const $showRestaurantsId = createStore([])
export const $isFiltering = createStore(false)

export const getRestaurants = createEvent()
export const setIsFiltering = createEvent()
export const searchRestaurants = createEvent()
const setAllRestaurants = createEvent()
const setShowRestaurantsId = createEvent()

// Change show store of Restaurants id
$showRestaurantsId.on(setShowRestaurantsId, (_, payload) => payload)

// Change the filtering flag
$isFiltering.on(setIsFiltering, (_, payload) => payload)

// Get All restaurants
sample({
  clock: getRestaurants,
  fn: (data) => data ?? { page: 1, perPage: 10 },
  target: fetchRestaurantsFx,
})

sample({
  clock: [fetchRestaurantsFx.doneData],
  filter: (_, res) => res.data.restaurants.length > 0,
  fn: (_, res) => res.data.restaurants,
  target: setAllRestaurants,
})

$allRestaurants.on(setAllRestaurants, (store, payload) => [
  ...store,
  ...payload,
])

// Show All Restaurants
sample({
  clock: [$allRestaurants, $isFiltering],
  source: { allRestaurants: $allRestaurants, isFiltering: $isFiltering },
  filter: (sourseData) => !sourseData.isFiltering,
  fn: (sourseData) => {
    console.log('sourseData', sourseData)
    return sourseData.allRestaurants.map((item) => item.id)
  },
  target: setShowRestaurantsId,
})

// Set found restaurants
sample({
  clock: searchRestaurants,
  source: { isFiltering: $isFiltering, allRestaurants: $allRestaurants },
  filter: (sourseData) => sourseData,
  fn: (sourseData, clockData) => {
    return sourseData.allRestaurants
      .filter(
        (item) =>
          item.title.includes(clockData) ||
          item.description.includes(clockData) ||
          item.coords.address_name.includes(clockData)
      )
      .map((item) => item.id)
  },
  target: setShowRestaurantsId,
})

$allRestaurants.watch((data) => console.log('all Restaurants', data))
$showRestaurantsId.watch((data) => console.log('$showRestaurantsId', data))
$isFiltering.watch((data) => console.log('$isFiltering', data))
