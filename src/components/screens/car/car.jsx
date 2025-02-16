import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { carApi } from "../../../services/carApi"
import CarItem from "../../carItem/CarItem"
import styles from './car.module.css'

export const Car = () => {
  const {id} = useParams()
  const [data, setData] = useState({id:'', name:'', price:'', image:''})

  useEffect(() =>{
    const getCar = async() => {
      if (!id) return      

      try {
        const response = await carApi.getCar(id)

        setData(response)
      } catch (error) {
        console.log(error)
      }
    }

    getCar()
  },[id])

  return (
  <div>
    <Link className={styles.button} to='/'> Back </Link>
    <CarItem car={data} />
  </div>
  )
}
