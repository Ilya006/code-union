import { Form, Formik } from 'formik'
import React from 'react'
import { TextField, Button } from 'shared/ui'
import { ReactComponent as Icon } from './assets/search.svg'
import styles from './Search.module.css'

export const SearchRestaurant = () => {
  const handleSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className={styles.box}>
      <Formik onSubmit={handleSubmit}>
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
