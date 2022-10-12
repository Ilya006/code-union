import React from 'react'
import { useField } from 'formik'
import cn from 'classnames'
import styles from './TextField.module.css'
import { ErrorMsg } from 'shared/ui/ErrorMsg'

export const TextField = ({ children, className, ...restProps }) => {
  const [field] = useField(restProps.name)

  return (
    <div className={cn(styles.field, className)}>
      <input className={styles.input} {...restProps} {...field} />
      <i className={styles.icon}>{children}</i>
      <ErrorMsg name={restProps.name} />
    </div>
  )
}
