import { useStore } from 'effector-react/compat'
import React from 'react'
import { CardRestauran } from '../CardRestauran'
import { $allRestaurants } from './../../model/restaurants'

export const ListRestaurants = () => {
  const allRestaurants = useStore($allRestaurants)

  return allRestaurants.map((rest) => (
    <CardRestauran key={rest.id} data={rest} />
  ))
}
