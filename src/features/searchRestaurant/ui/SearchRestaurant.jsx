import React from 'react'
import { Button, Field } from 'shared/ui'
import { ReactComponent as Icon } from './assets/search.svg'
import styles from './Search.module.css'

export const SearchRestaurant = () => {
  return (
    <div className={styles.box}>
      <form className={styles.form}>
        <Field placeholder="Город, адрес, шоссе или ЖК">
          <Icon />
        </Field>
        <Button size="large" type="submit">
          Найти
        </Button>
      </form>
    </div>
  )
}
