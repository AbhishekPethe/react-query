import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'


// with React-Query


// return is important
const fetchHeroes = () => {
  return  axios.get("http://localhost:4000/superheroes")
}


const RQSuperHero = () => {

  const [stopPoll , useStopPoll] = useState(5000)

  const onSuccess = (data) => {
    console.log("Data is fetched successfully", data);
   
   
    
  }

  const onError = (error) => {
    console.log("There is an error" , error);
  }

                            //key       //returning a promise
  const results = useQuery("super-heroes", fetchHeroes,
    {
      // cacheTime: 5000, //its in milliseconds , default cache time is 5 minutes
      // staleTime : 30000,
      // refetchOnMount: true,
      // refetchOnWindowFocus : true,
      // refetchInterval : 2000,
      // refetchInterval : 2000,
      // enabled : false,

      onSuccess: onSuccess,
      onError: onError,

      // Data transformation 
      // select: (data) => {
      //   const superHeroNames = data.data.map((each) => each.name)
      //   return superHeroNames
      // }
    })
  
  const { isLoading, data , isError , error , isFetching , refetch} = results
  console.log(data);

  if(isLoading || isFetching) return <p>Loading...</p>

  if (isError) return <p>{error.message}</p>

  console.log(isLoading , isFetching);



  return (
    <div>
      {/* <button onClick={refetch} >fetch data</button> */}

      {/* {
                data?.data.map((each, i) => {
                    return (
                        <Link to={`/rqsinglesuperhero/${each.id}`} key={i}>{each.name}</Link>
                    )
                })
    }
      
      
      {/* with data transformation  
        when we use data transformation , the data we get from useQuery is manipulated according to our need.
      */}
      
      {/* {
        data.map((each , i) => {
          return (
            <p key={i} >{each}</p>
          )
        })
      } */}
    </div>
  )
}

export default RQSuperHero