// import axios from 'axios'
// import React, { Fragment } from 'react'
// import { useInfiniteQuery, useQuery } from 'react-query'


// const fetchInfinite = ({pageParams = 1}) => {
//     return axios.get(`http://localhost:4000/colors/?_page=${pageParams}&_per_page=2`)
// }

// const InfiniteQueries = () => {
//     const { data, isError, error, isLoading , hasNextPage , fetchNextPage , isFetching , isFetchingNextPage} = useInfiniteQuery("infi-queries", fetchInfinite, {
//         // pages here refers to the array of api responses where each response corresponds to the fetching 2 colors at a time.
//         getNextPageParam: (_lastpage , pages) => {
//             if (pages.length < 4) {
//                 return pages.length + 1
//             }
//             else {
//                 return undefined
//             }
//         }
//         // getNextPageParams returns a hasNextPage property according to the return
//     })
//     console.log(data);
//     if (isLoading) {
//         return <p>Loading...</p>
//     }

//     if (isError) {
//         return <p>{error.message}</p>
//     }

//   return (
//       <div>
//           <div>
              
//           {
//               data?.pages.map((group , i) => {
//                   return (
//                       <Fragment key={i}>
//                           {
//                               group?.data?.map((each) => {
//                                   return (
//                                       <p>{each.id} : {each.label}</p>
//                                   )
//                               })
//                           }
//                       </Fragment>
//                     )
//                 })
//             }
//           </div>
//           <div>
//               <button disabled={!hasNextPage} onClick={fetchNextPage} >Load More</button>
//           </div>
//           <div>
//               {isFetching && !isFetchingNextPage ? "Fetching..." : null}
//           </div>
//     </div>
//   )
// }

// export default InfiniteQueries

import { Fragment } from 'react'
import { useInfiniteQuery } from 'react-query'
import axios from 'axios'

const fetchColors = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:4000/colors?_page=${pageParam}&_per_page=2`)
}

const InfiniteQueries = () => {
  const {
    isLoading,
    isError,
    error,
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage
  } = useInfiniteQuery(['colors'], fetchColors, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1
      } else {
        return undefined
      }
    }
  })

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <>
      <div>
        {data?.pages.map((group, i) => {
          return (
            <Fragment key={i}>
              {group.data.data.map(color => (
                <h2 key={color.id}>
                  {color.id} {color.label}
                </h2>
              ))}
            </Fragment>
          )
        })}
      </div>
      <div>
        <button onClick={fetchNextPage} disabled={!hasNextPage}>
          Load more
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </>
  )
}

export default InfiniteQueries