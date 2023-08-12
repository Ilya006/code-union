import React from 'react'
import cn from 'classnames'
import { ErrorMessage } from 'formik'
import styles from './FieldErrorMsg.module.css'

export const FieldErrorMsg = ({ name, className }) => {
  return (
    <ErrorMessage name={name}>
      {(msg) => <i className={cn(className, styles.errorMsg)}>{msg}</i>}
    </ErrorMessage>
  )
}
