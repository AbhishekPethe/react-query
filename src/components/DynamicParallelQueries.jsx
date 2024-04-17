import React from 'react'
import { useQueries } from 'react-query'
import axios from 'axios'

const fetchHeroes= (heroid) => {
    return axios.get(`http://localhost:4000/superheroes/${heroid}`)
}

const DynamicParallelQueries = ({ heroIds }) => {

    const queryResults = useQueries(
        heroIds?.map((heroid) => {
            return {
                queryKey: ['super-hero', heroid],
                queryFn : () => fetchHeroes(heroid)
            }
        })
    )

    const [d1 , d2] = queryResults
    
    const d3 = [d1, d2]
    console.log(d3);

  return (
      <div>
          {
              d3.map((each) => {
                  return (
                      <p>{each.data?.data.name}</p>
              )
          })
          }
       
         
    </div>
  )
}

export default DynamicParallelQueries


