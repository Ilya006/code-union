import React from 'react'
import { useFormikContext } from 'formik'
import cn from 'classnames'
import styles from './AnyErrorMsg.module.css'

export const AnyErrorMsg = ({ name, className }) => {
  const { errors } = useFormikContext()

  return Object.keys(errors).includes(name) ? (
    <i className={cn(styles.errorMsg, className)}>{errors[name]}</i>
  ) : null
}
