import { createStore, createEffect, sample, createEvent } from 'effector/compat'
import { fetchRestaurants } from '../api'

const fetchRestaurantsFx = createEffect(fetchRestaurants)

export const $showRestaurantsId = createStore([])
// Создаем стор id всех ресторанов, чтобы при сбросе фильтров не пересоздавать новый массив id

export const $allRestaurants = createStore([])
const $allRestaurantsId = $allRestaurants.map((store) =>
  store.map((item) => item.id)
)

export const pageMounted = createEvent()
export const searchRestaurants = createEvent()
export const resetFilters = createEvent()
const setAllRestaurants = createEvent()
const setShowRestaurantsId = createEvent()

// Change show store of Restaurants id
$showRestaurantsId.on(setShowRestaurantsId, (_, payload) => payload)

// Get All restaurants
sample({
  clock: pageMounted,
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

// Set show all restaurants or reset filter
sample({
  clock: [$allRestaurantsId, resetFilters],
  source: $allRestaurantsId,
  fn: (sourseData) => sourseData,
  target: setShowRestaurantsId,
})

// Set found restaurants
sample({
  clock: searchRestaurants,
  source: $allRestaurants,
  fn: (sourseData, clockData) => {
    return sourseData
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
$allRestaurantsId.watch((data) => console.log('$allRestaurantsId', data))
