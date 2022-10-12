import React, { useEffect } from 'react'
import { Form, Formik } from 'formik'
import { useStore } from 'effector-react/compat'
import { createEffect, sample } from 'effector/compat'
import cn from 'classnames'
import { TextField, Button, AnyErrorMsg } from 'shared/ui'
import {
  $isDoneSignIn,
  $signInError,
  $signUpLoad,
  handleSubmitFx,
  resetIsDone,
} from '../model'
import { SignInSchema } from '../lib'
import styles from './SignIn.module.css'

const initialValues = {
  email: '',
  password: '',
}

export const SignIn = () => {
  const loading = useStore($signUpLoad)
  const isDone = useStore($isDoneSignIn)

  const handleSubmit = (data, actions) => {
    handleSubmitFx(data)

    // Catch error
    const setErrorFx = createEffect((value) => actions.setErrors(value))
    sample({
      clock: $signInError,
      target: setErrorFx,
    })
  }

  // Reset store isDone
  useEffect(() => resetIsDone, [resetIsDone])

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
          <Button type="submit" size="full" disabled={loading} done={isDone}>
            Войти
          </Button>
          <AnyErrorMsg name="signInError" />
        </Form>
      </Formik>
      <span className={styles.btn}>Зарегистрироваться</span>
      <span className={cn(styles.btn, styles.btnSmall)}>Забыли пароль?</span>
    </div>
  )
}
