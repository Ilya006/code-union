import React from 'react'
import { Button } from 'shared/ui'
import { ReactComponent as LocationImg } from './assets/location.svg'
import styles from './Card.module.css'

export const Card = (props) => {
  return (
    <div className={styles.box}>
      <div className={styles.picture}>
        <img
          src="https://media.istockphoto.com/photos/youth-hostel-dorm-room-picture-id182498079?k=20&m=182498079&s=612x612&w=0&h=o-dEkvg0Mkn5xegHc1YuGBnO9-ar1OXSEQHnMfaN7rY="
          alt=""
        />
      </div>
      <div className={styles.info}>
        <h4>Infinity Plaza</h4>
        <span className={styles.location}>
          <LocationImg />
          Анталья, Турция
        </span>
        <p className={styles.description}>{props.text}</p>
        <span className={styles.price}>от $56 000 000</span>
        <Button>Подробнее</Button>
      </div>
    </div>
  )
}
