import React, { useState } from 'react'
import styles from './createCar.module.css'

export const CreateCar = ({ setCars }) => {
  const [data, setData] = useState({
    name: '',
    price: '',
    image: ''
  })

  const createCar = (e) => {
    e.preventDefault();
    setCars(prev => [...prev, { id: prev.length + 1, ...data }])
    setData({
      name: '',
      price: '',
      image: ''
    })
  }

  return (
    <form className={styles.form} onSubmit={createCar}>
      <input placeholder='Name' onChange={e => setData(prev => ({ ...prev, name: e.target.value })) } value={data.name} />
      <input placeholder='Price' onChange={e => setData(prev => ({ ...prev, price: e.target.value })) } value={data.price} />
      <input placeholder='Image' onChange={e => setData(prev => ({ ...prev, image: e.target.value })) } value={data.image} />

      <button className='btn' type='submit'>Add Car</button>
    </form>
  )
}

export default CreateCar