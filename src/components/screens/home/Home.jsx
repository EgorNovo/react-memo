import '../../../assets/styles/global.css'
import {cars as carsData} from './cardData'
import CarItem from '../../carItem/CarItem'
import CreateCar from '../../createCar/createCar'
import { useState } from 'react'

const Home = () => {
  const [cars, setCars] = useState(carsData)

  return (
    <div>
      <h1>Cars catalog</h1>
      <CreateCar setCars={setCars}/>
      <div>
      {carsData.length ? cars.map( car => 
        <CarItem car={car} key={car.id}/>
      ):<p>There are no cars</p>}
      </div>
    </div>
  )
}

export default Home