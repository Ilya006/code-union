import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from 'shared/ui'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <Link to="/">Главная</Link>
          <Link to="/signup">Регистрация</Link>
          <Link to="/signin">
            <Button>Войти</Button>
          </Link>
        </nav>
      </Container>
    </header>
  )
}
