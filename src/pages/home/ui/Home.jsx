import React, { useEffect } from 'react'
import { useStore } from 'effector-react/compat'

import { Header } from 'widgets/header'
import { SearchRestaurant } from 'features'
import { ListRestaurants, restaurantsModel } from 'entities/restaurants'
import { $IsAuthenticated } from 'entities/viewer'
import { Container } from 'shared/ui'
import styles from './Home.module.css'

export const Home = () => {
  const isAuth = useStore($IsAuthenticated)

  useEffect(() => {
    if (isAuth) {
      restaurantsModel.pageMounted()
    }
  }, [isAuth])

  return (
    <>
      <Header />
      <h2>hello</h2>
      <main className={styles.main}>
        <section className={styles.hero}>
          <Container>
            <h2>Найдите лучшее предложение от ресторана</h2>
            <SearchRestaurant />
          </Container>
        </section>

        <section className={styles.sentence}>
          <Container>
            {isAuth ? (
              <>
                <h2>Популярные предложения</h2>
                <p className={styles.subtitle}>
                  Предложения, которые любят наши клиенты
                </p>
              </>
            ) : (
              <h2>Пожалуйста авторизуйтесь!</h2>
            )}
            <div className={styles.list}>
              <ListRestaurants />
            </div>
          </Container>
        </section>
      </main>
    </>
  )
}
