import React from 'react'
import cn from 'classnames'
import styles from './button.module.css'

export const Button = (props) => {
  const {
    children,
    type = 'button',
    disabled = false,
    size = 'medium',
    onClick,
  } = props

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={cn(
        styles.button,
        { [styles[size]]: size },
        { [styles.disabled]: disabled }
      )}
    >
      {children}
    </button>
  )
}