import React from 'react'
import { Button } from 'shared/ui'
import styles from './Search.module.css'

export const SearchRestaurant = () => {
  return (
    <div className={styles.box}>
      <form className={styles.form}>
        <input type="text" placeholder="Город, адрес, шоссе или ЖК" />
        <Button size="large" type="submit">
          Найти
        </Button>
      </form>
    </div>
  )
}
