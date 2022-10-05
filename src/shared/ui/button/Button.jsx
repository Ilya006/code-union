import React from 'react'
import cn from 'classnames'
import styles from './Button.module.css'

export const Button = (props) => {
  const {
    id,
    children,
    type = 'button',
    disabled = false,
    size = 'medium',
    onClick,
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
        { [styles.disabled]: disabled },
        { [styles.transparent]: transparent }
      )}
    >
      {children}
    </button>
  )
}
