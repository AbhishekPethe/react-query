import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'


// with React-Query


// return is important
const fetchHeroes = () => {
  return  axios.get("http://localhost:4000/superheroess")
}


const RQSuperHero = () => {

                            //key       //returning a promise
  const results = useQuery("super-heroes", fetchHeroes)
  
  const { isLoading, data , isError , error } = results
  console.log(data);

  if(isLoading) return <p>Loading...</p>

  if (isError) return <p>{error.message}</p>

  return (
    <div>
      {
                data?.data.map((each, i) => {
                    return (
                        <p key={i}>{each.name}</p>
                    )
                })
            }
    </div>
  )
}

export default RQSuperHero