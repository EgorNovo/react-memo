import '../../../assets/styles/global.css'
import CarItem from '../../carItem/CarItem'
import CreateCar from '../../createCar/createCar'
import { useState, useEffect, useContext } from 'react'
import { carApi } from '../../../services/carApi'
import styles from './home.module.css'
import { AuthContext } from '../../../providers/AuthProvider'

export const Home = () => {
  const [cars, setCars] = useState([])
  const {user, setUser} = useContext(AuthContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await carApi.getCars()

        setCars(data)
      } catch (error) {
        console.log(error)
        setCars([])
      }
    }

    fetchData()
  }, [])

  return (
    <div>
        {user ? ( 
        <>
          <h2>Welcom, {user.name}!</h2>
          <button onClick = {() => setUser(null)}>Logout</button>
        </>):
        <>
          <button onClick = {() => setUser({name: 'John'})}>Login</button>
        </>
        } 

      <h1>Cars catalog</h1>
      <CreateCar setCars={setCars}/>
      <div className={styles.carCatalog}>
      {cars.length ? cars.map( car => 
        <CarItem car={car} key={car.id}/>
      ):<p>There are no cars</p>}
      </div>
    </div>
  )
}
