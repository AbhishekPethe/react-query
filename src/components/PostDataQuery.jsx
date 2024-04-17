import React, { useState } from 'react'
import useSuperHeroDataMutation , {addUseSuperHeroData} from '../hooks/useSuperHeroDataMutation'


const PostDataQuery = () => {

  const [name, setName] = useState("")
  const [alterEgo, setAlterEgo] = useState("")
  
  
  const onSuccess = (data) => {
    console.log("");
  }
  
  const onError = () => {
    console.log("");
  }

  const {data , isLoading , error , refetch } = useSuperHeroDataMutation(onSuccess , onError)
  const { mutate: addHero } = addUseSuperHeroData()
  
  const handleClick = (e) => {
    e.preventDefault()
    console.log({name , alterEgo});
    const hero = {name , alterEgo}
    addHero(hero)
  }



  return (
      <div>
        <form>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" name="alterEgo" value={alterEgo} onChange={(e) => setAlterEgo(e.target.value)} />
        <button onClick={handleClick} >Add Hero</button>
        
      </form>
      <button onClick={refetch}>Fetch Heroes</button>
      {
        data?.data.map((each) => {
          return (
            <>
              <p>{each.id}</p>
            <p>{each.name}</p>
            <p>{each.alterEgo}</p>
              
            
            </>
          )
        })
     }
    </div>
  )
}
 
export default PostDataQuery