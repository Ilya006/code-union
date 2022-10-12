import React from 'react'
import cn from 'classnames'
import { ErrorMessage } from 'formik'
import styles from './ErrorMsg.module.css'

export const ErrorMsg = ({ name, className }) => {
  return (
    <ErrorMessage name={name}>
      {(msg) => <i className={cn(className, styles.errorMsg)}>{msg}</i>}
    </ErrorMessage>
  )
}
