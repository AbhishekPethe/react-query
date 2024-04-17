import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'


const fetchSingle = (id) => {
    return axios.get(`http://localhost:4000/superheroes/${id}`)
}

const useSingleHeroData = (id) => {
            // cuz it is dependent on id as well
    return useQuery(["single-hero" , id], () => fetchSingle(id))
}

// ==================================================================

// another way of doing above
// with queryKey
// queryKey mimics whatever array we passed in the key and pass it to the fetch function

// const fetchSingle = ({ queryKey }) => {
//     const id  = queryKey[1]
//     return axios.get(`http://localhost:4000/superheroes/${id}`)
// }

// const useSingleHeroData = (id) => {
//             // cuz it is dependent on id as well
//     return useQuery(["single-hero" , id], fetchSingle)
// }


export default useSingleHeroData