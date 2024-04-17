import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import useSingleHeroData from '../hooks/useSingleHeroData'



const RQSingleSuperHero = () => {
    
    const { id } = useParams()

    const { data } = useSingleHeroData(id)
  return (
      <div>
          <p>id : {data?.data.id}</p>
          <p>name : {data?.data.name}</p>
          <p>alterEgo : {data?.data.id}</p>

      </div>
  )
}

export default RQSingleSuperHero