import React from 'react'
import { ErrorMessage, useField } from 'formik'
import cn from 'classnames'
import styles from './TextField.module.css'

export const TextField = ({ children, className, ...restProps }) => {
  const [field] = useField(restProps.name)

  return (
    <div className={cn(styles.field, className)}>
      <input className={styles.input} {...restProps} {...field} />
      <i className={styles.icon}>{children}</i>
      <ErrorMessage name={restProps.name}>
        {(msg) => <span>{msg}</span>}
      </ErrorMessage>
    </div>
  )
}
