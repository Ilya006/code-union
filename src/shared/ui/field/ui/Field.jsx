import React from 'react'
import cn from 'classnames'
import styles from './Field.module.css'

export const Field = ({ children, className, ...restProps }) => {
  return (
    <div className={cn(styles.field, className)}>
      <input type="text" className={styles.input} {...restProps} />
      <i className={styles.icon}>{children}</i>
    </div>
  )
}
