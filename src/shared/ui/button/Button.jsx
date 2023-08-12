import React from 'react'
import cn from 'classnames'
import styles from './button.module.css'

export const Button = (props) => {
  const {
    id,
    children,
    type = 'button',
    disabled = false,
    size = 'medium',
    onClick,
    done = false,
    transparent = false,
  } = props

  return (
    <button
      id={id}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={cn(
        styles.button,
        { [styles[size]]: size },
        { [styles.transparent]: transparent },
        { [styles.done]: done }
      )}
    >
      {done ? <span className={styles.doneIcon}>&#10004;</span> : children}
    </button>
  )
}
