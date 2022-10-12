import React from 'react'
import { useStore } from 'effector-react'
import { createEffect, sample } from 'effector/compat'
import { Form, Formik } from 'formik'
import { TextField, Button, CheckboxField, ErrorMsg } from 'shared/ui'
import { $signUpError, $signUpLoad, handleSubmitFx } from '../model'
import { SignInSchema } from './../lib'
import styles from './SignUp.module.css'

const initialValues = {
  email: '',
  password: '',
  passwordConfirmation: '',
  politicalAgreement: false,
}

export const SignUp = () => {
  const loading = useStore($signUpLoad)

  const handleSubmit = async (data, actions) => {
    const { email, password } = data
    handleSubmitFx({ email, password })

    // Catch error
    const setErrorFx = createEffect((value) => actions.setErrors(value))
    sample({
      clock: $signUpError,
      target: setErrorFx,
    })
  }

  return (
    <div className={styles.box}>
      <h3 className={styles.title}>Зарегистрироваться</h3>
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
            className={styles.input}
          />
          <TextField
            name="passwordConfirmation"
            type="password"
            placeholder="Повторите пароль"
            className={styles.input}
          />
          <div className={styles.polical}>
            <div className={styles.policalBox}>
              <CheckboxField
                name="politicalAgreement"
                className={styles.inputCheckbox}
              />
              <p className={styles.link}>
                Я принимаю условия{' '}
                <a href="#">
                  {' '}
                  Пользовательского соглашения, политики конфиденциальности,
                  Обработки и распространения персональных данных
                </a>
              </p>
            </div>
            <ErrorMsg name="politicalAgreement" />
          </div>

          <Button type="submit" size="full" disabled={loading}>
            Войти
          </Button>
          <ErrorMsg name="commonError" />
        </Form>
      </Formik>
    </div>
  )
}
