import { Link } from 'react-router-dom'
import styles from './carsItem.module.css'

export const CarItem = (props) => {
  const car = props?.car

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
        <Link className={styles.button} to={`/car/${car.id}`}> Read more</Link>
      </div>
    </div>
  )
}

export default CarItem