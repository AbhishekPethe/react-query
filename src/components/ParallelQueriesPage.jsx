import React from 'react'
import { useQuery } from "react-query"
import axios from "axios"

const fetchHeroes = () => {
    return axios.get("http://localhost:4000/superheroes")
}

const fetchFriends = () => {
    return axios.get("http://localhost:4000/friends")
}

const ParallelQueriesPage = () => {

    const { data : hero } = useQuery("hero", fetchHeroes, {})
    const { data : friends } = useQuery("friends", fetchFriends, {})
    useQuery("friends", fetchFriends, {})
    useQuery("heroes", fetchHeroes, {})

  return (
      <div>
          {
              hero?.data.map((each , i) => {
                  return (
                      <p key={i}>{each.name}</p>
                  )
              })
          }
          {
              friends?.data.map((each , i) => {
                return (
                    <p key={i}>{each.name}</p>
                )
            })
          }
      </div>
     
  )
}

export default ParallelQueriesPage