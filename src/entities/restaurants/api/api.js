import { api } from 'shared/api'
import { router } from './routes'

export const fetchRestaurants = (config) => {
  return api.get(router.getRestaurants(config))
}
