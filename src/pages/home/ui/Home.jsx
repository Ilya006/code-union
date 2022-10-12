import React, { useEffect } from 'react'
import { useStore } from 'effector-react/compat'

import { Header } from 'widgets/header'
import { getRestaurants } from 'entities/restaurants'
import { $IsAuthenticated } from 'entities/viewer'
import { SearchRestaurant } from 'features'
import { Container, Card, Button } from 'shared/ui'
import styles from './Home.module.css'

export const Home = () => {
  const isAuth = useStore($IsAuthenticated)

  const onclick = () => {
    getRestaurants()
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <Container>
            <h2>Найдите лучшее предложение от ресторана</h2>
            <SearchRestaurant />
          </Container>
        </section>

        <section className={styles.sentence}>
          <Container>
            <h2>Популярные предложения</h2>
            <p className={styles.subtitle}>
              Предложения, которые любят наши клиенты
            </p>
            <div className={styles.list}>
              <Card text="Один из крупнейших ресторанов.." />
              <Card text="Один из крупнейших ресторанов.." />
              <Card text="Один из крупнейших ресторанов.." />
              <Card text="Один из крупнейших ресторанов.." />
              <Card text="Один из крупнейших ресторанов.." />
              <Card text="Один из крупнейших ресторанов.." />
              <Card text="Один из крупнейших ресторанов.." />
              <Card text="Один из крупнейших ресторанов.." />
            </div>
          </Container>
        </section>
      </main>

      <Button onClick={onclick}>посты</Button>
    </>
  )
}
