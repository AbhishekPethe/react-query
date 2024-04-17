import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'

const fetchColors = (page) => {
    return axios.get(`http://localhost:4000/colors?_page=${page}&_per_page=2`)
}

const PaginatedQueriespage = () => {
  
    const [page , setPage] = useState(1)
  
    const { isLoading, isError, error, data , isFetching } = useQuery(['colors', page], () => fetchColors(page), {
        keepPreviousData : true  //when the next data is loading , till then we can still show previous
    })
    console.log(data);
    
    return (
      <div>
            {
                data?.data.data.map((each) => {
                    return (
                        <p>{each.label}</p>
                    )
                })
            }        
            <button disabled={page==1 ? true : false} onClick={()=>setPage(prev => prev - 1)}>prev</button>
            <button disabled={page == data?.data.last ? true : false} onClick={() => setPage(prev => prev + 1)}>next</button>
            {isFetching && <p>Loading...</p>}
    </div>
  )
}

export default PaginatedQueriespage