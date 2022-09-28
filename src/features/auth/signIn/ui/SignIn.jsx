import React from 'react'
import cn from 'classnames'
import { Button, Field } from 'shared/ui'
import styles from './SignIn.module.css'

export const SignIn = () => {
  return (
    <div className={styles.box}>
      <h3 className={styles.title}>Войти</h3>
      <form className={styles.form}>
        <Field placeholder="Email" className={styles.input} />
        <Field placeholder="Пароль" className={styles.input} />
        <Button type="submit" size="full">
          Войти
        </Button>
      </form>
      <span className={styles.btn}>Зарегистрироваться</span>
      <span className={cn(styles.btn, styles.btnSmall)}>Забыли пароль?</span>
    </div>
  )
}
