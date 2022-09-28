import React from 'react'
import { Container, Button } from 'shared/ui'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <Button transparent>Главная</Button>
          <Button transparent>Регистрация</Button>
          <Button>Войти</Button>
        </nav>
      </Container>
    </header>
  )
}
