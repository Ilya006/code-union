import React from 'react'
import { Field } from 'formik'
import styles from './CheckboxField.module.css'

export const CheckboxField = (props) => {
  return <Field {...props} type="checkbox" className={styles.checkbox} />
}
