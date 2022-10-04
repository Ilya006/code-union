import React from 'react'
import { ErrorMessage, Form, Formik } from 'formik'
import { TextField, Button, CheckboxField } from 'shared/ui'
import { SignInSchema } from './../lib'
import styles from './SignUp.module.css'

const initialValues = {
  email: 'helldddo@mail.ru',
  password: '',
  passwordConfirmation: '',
  politicalAgreement: false,
}

export const SignUp = () => {
  const handleSubmit = (data) => {
    console.log(data)
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
            autoComplete="off"
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
            <ErrorMessage name="politicalAgreement">
              {(msg) => <span>{msg}</span>}
            </ErrorMessage>
          </div>

          <Button type="submit" size="full">
            Войти
          </Button>
        </Form>
      </Formik>
    </div>
  )
}
