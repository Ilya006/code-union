import React from 'react'
import { Header } from 'widgets/header'
import { Container, Button } from 'shared/ui'
import styles from './Home.module.css'
import { SearchRestaurant } from 'features'
import { ListRestaurants } from 'entities/restaurants'

export const Home = () => {
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
              <ListRestaurants />
            </div>
          </Container>
        </section>
      </main>

      <Button onClick={onclick}>посты</Button>
    </>
  )
}
