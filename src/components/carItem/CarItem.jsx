import React from 'react'
import styles from './carsItem.module.css'

export const CarItem = ({car}) => {

  return (
    <div className={styles.item}>
      <div 
      className={styles.image}
      style={{
        backgroundImage: `url(${car.image})`
      }}
      />
      <div className='info'>
        <h2>{car.name}</h2>
        <p>{new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
            })
            .format(car.price)}</p>
        <button>Read more</button>
      </div>
    </div>
  )
}

export default CarItem