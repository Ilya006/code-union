import React from 'react'

import { SearchRestaurant } from 'features'
import { Header } from 'widgets/header'
import { Container } from 'shared/ui'
import styles from './Home.module.css'

export const Home = () => (
  <>
    <Header />
    <main className={styles.main}>
      <section className={styles.hero}>
        <Container>
          <h2>Найдите лучшее предложение от ресторана</h2>
          <SearchRestaurant />
        </Container>
      </section>
    </main>
  </>
)
