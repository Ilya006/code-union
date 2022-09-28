import React from 'react'
import ReactDOM from 'react-dom'
import cn from 'classnames'
import styles from './Modal.module.css'

export const Modal = ({ children, open }) => {
  if (!open) return null

  return ReactDOM.createPortal(
    <>
      <div className={cn(styles.overlay, styles.modalOpen)} />
      <div className={styles.modal}>
        <div className={styles.content}>{children}</div>
        <button className={styles.closeBtn}>&#10006;</button>
      </div>
    </>,
    document.getElementById('portal')
  )
}
