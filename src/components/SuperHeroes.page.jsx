import axios from 'axios'
import React, { useEffect, useState } from 'react'


const SuperHeroes = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error , setError] = useState("")

    // normal fetching

    useEffect(() => {
        setLoading(true)
       
            axios.get("http://localhost:4000/superheroes")
                .then((response) => {
                    setData(response.data)
                    setLoading(false)
                })
                .catch((error) => {
                    setError(error.message)
                    setLoading(false)
                })
        
        
    } , [])

    if (loading) return <p>Loading...</p>
    
    if (error) return <p>{error}</p>


    return (
        <div>
            
            {
                data.map((each, i) => {
                    return (
                        <p key={i}>{each.name}</p>
                    )
                })
            }
        </div>
    )
}

export default SuperHeroes