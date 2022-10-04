import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import cn from 'classnames'
import { useMountTransition } from 'shared/lib/hook'
import styles from './Modal.module.css'

export const Modal = ({ children, open, onClose }) => {
  const [isShow, setIsShow] = useState(false)
  const hasTransitionedIn = useMountTransition(isShow, 200)

  const onCloseModal = () => {
    setIsShow(false)
  }

  useEffect(() => {
    if (open) {
      setIsShow(true)
    }
  }, [open])

  useEffect(() => {
    if (!isShow && !hasTransitionedIn) {
      onClose()
    }
  }, [isShow, hasTransitionedIn, onClose])

  if (!open && !hasTransitionedIn) return null

  return ReactDOM.createPortal(
    <>
      <div
        className={cn(styles.overlay, {
          [styles.modalOpen]: isShow,
        })}
        onClick={onCloseModal}
      />
      <div
        className={cn(styles.modal, {
          [styles.modalOpen]: isShow,
        })}
      >
        <div className={styles.content}>{children}</div>
        <button onClick={onCloseModal} className={styles.closeBtn}>
          &#10006;
        </button>
      </div>
    </>,
    document.getElementById('portal')
  )
}
