import React from 'react'

import { SearchRestaurant, SignIn } from 'features'
import { Header } from 'widgets/header'
import { Container, Card, Modal } from 'shared/ui'
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

    <Modal open>
      <SignIn />
    </Modal>
  </>
)
