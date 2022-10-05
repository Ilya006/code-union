import React, { useState } from 'react'
import { Container, Button, Modal } from 'shared/ui'
import { SignIn, SignUp } from 'features'
import styles from './Header.module.css'

const modals = {
  'signUp': <SignUp />,
  'signIn': <SignIn />,
}

export const Header = () => {
  const [formModal, setFormModal] = useState('')

  const onOpenModal = (e) => {
    setFormModal(e.target.id)
  }

  return (
    <>
      <header className={styles.header}>
        <Container>
          <nav className={styles.nav}>
            <Button transparent>Главная</Button>
            <Button transparent id='signUp' onClick={onOpenModal}>
              Регистрация
            </Button>
            <Button id='signIn' onClick={onOpenModal}>Войти</Button>
          </nav>
        </Container>
      </header>

      <Modal open={!!formModal} onClose={setFormModal}>
        {formModal && modals[formModal]}
      </Modal>
    </>
  )
}
