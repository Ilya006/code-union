import React from 'react'
import { Form, Formik } from 'formik'
import { searchRestaurants, setIsFiltering } from 'entities/restaurants/model'
import { TextField, Button } from 'shared/ui'
import { ReactComponent as Icon } from './assets/search.svg'
import styles from './SearchRestaurant.module.css'

const initialValues = {
  search: '',
}

export const SearchRestaurant = () => {
  const handleSubmit = (data) => {
    if (!!data.search) {
      setIsFiltering(true)
      searchRestaurants(data.search)
    } else {
      setIsFiltering(false)
    }
  }

  return (
    <div className={styles.box}>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={styles.form}>
          <TextField name="search" placeholder="Город, адрес, шоссе или ЖК">
            <Icon />
          </TextField>
          <Button size="large" type="submit">
            Найти
          </Button>
        </Form>
      </Formik>
    </div>
  )
}
