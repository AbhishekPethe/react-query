import React from 'react'
import useSuperHeroData from '../hooks/useSuperHeroData'

const RQwithCustomHook = () => {

    const onSuccess = (data) => {
        console.log('Data is fetched successfully' , data);
    }

    const onError = (error) => {
        console.log("Error" , error.message);
    } 

    const { isLoading, isError, error, data, refetch } = useSuperHeroData(onSuccess, onError)

    if (isLoading) return <p>Loading....</p>
    
    if (isError) return <p>{error.message}</p>


  return (
      <div>
          <button onClick={refetch}> Click Now </button>
          {
              data?.map((each) => {
                  return ( 
                      <p>{each}</p>
                  )
              })
        }      
      </div>
  )
}

export default RQwithCustomHook