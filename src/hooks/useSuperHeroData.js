import axios from "axios"
import { useQuery } from "react-query"

const fetchData = () => {
    return axios.get("http://localhost:4000/superheroes")
}

const useSuperHeroData = (onSuccess , onError) => {
    return useQuery("super-heroes", fetchData, {
        onSuccess,
        onError,
        select: (data) => {
            const superHeroes = data.data.map((each) => each.name)
            return superHeroes
        },
        enabled : false
    })
}
 
export default useSuperHeroData