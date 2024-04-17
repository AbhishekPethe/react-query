import axios from 'axios'
import React from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes")
}

const addHeroData = (hero) => {
  return axios.post("http://localhost:4000/superheroes" , hero)
}

const useSuperHeroDataMutation = (onSuccess , onError) => {
  return useQuery('super-heroes', fetchSuperHeroes, {
    onSuccess,
    onError,
    // enabled : false
  })
}

// export const addUseSuperHeroData = () => {
//   const queryClient = useQueryClient()
//   return useMutation(addHeroData, {
//     // fetch data automatically in bg after it is added
//     onSuccess: (newData) => {
//       // queryClient.invalidateQueries('super-heroes')

//       // below is used to get the data without making another request , it uses cached data and add it to it
//       // oldQueryData is previous data , data is the new data
//       queryClient.setQueryData('super-heroes', (oldQueryData) => {
//         return {
//           ...oldQueryData,
//           data : [...oldQueryData.data , newData.data]
//         }
//       })
//     }
//   })
// }


// --- with Optimistic updates---

export const addUseSuperHeroData = () => {
  const queryClient = useQueryClient()
  return useMutation(addHeroData, {
    //onMutate is called before the mutation function is fired
    onMutate: async (newHero) => { 
      await queryClient.cancelMutations('super-heroes')
      const previousData = queryClient.getQueryData('super-heroes')
      queryClient.setQueryData('super-heroes' , (oldQueryData) => {
        return {
          ...oldQueryData,
          data : [...oldQueryData.data , {id : oldQueryData?.data?.length + 1 , ...newHero}] //cuz we are getting raw data unlike above where we were getting data after the request
        }
      })

      //if above fails
      return {
        previousData
      }

    },

    // context has the info about the previousdata
    onError: (_error, _hero, context) => { 
      queryClient.setQueryData('super-heroes' , context.previousData)
    },
    onSettled: () => { 
      queryClient.invalidateQueries('super-heroes')
     }
  })
}




export default useSuperHeroDataMutation