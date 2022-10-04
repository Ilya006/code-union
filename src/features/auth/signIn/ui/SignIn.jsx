import React from 'react'
import { Form, Formik } from 'formik'
import cn from 'classnames'
import { TextField, Button } from 'shared/ui'
import { SignInSchema } from './../lib'
import styles from './SignIn.module.css'

const initialValues = {
  email: 'hello',
  password: '',
}

export const SignIn = () => {
  const handleSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className={styles.box}>
      <h3 className={styles.title}>Войти</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={SignInSchema}
      >
        <Form className={styles.form}>
          <TextField
            name="email"
            placeholder="Email"
            className={styles.input}
          />
          <TextField
            name="password"
            type="password"
            placeholder="Пароль"
            autoComplete="off"
            className={styles.input}
          />
          <Button type="submit" size="full">
            Войти
          </Button>
        </Form>
      </Formik>
      <span className={styles.btn}>Зарегистрироваться</span>
      <span className={cn(styles.btn, styles.btnSmall)}>Забыли пароль?</span>
    </div>
  )
}
