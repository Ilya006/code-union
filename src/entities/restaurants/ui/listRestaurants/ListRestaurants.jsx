import { useStore } from 'effector-react/compat'
import React from 'react'
import { CardRestauran } from '../CardRestauran'
import { $showRestaurantsId } from './../../model/restaurants'

export const ListRestaurants = () => {
  const ids = useStore($showRestaurantsId)

  return ids.map((id) => (
    <CardRestauran key={id} id={id} />
  ))
}
