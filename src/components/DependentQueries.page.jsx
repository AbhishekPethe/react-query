import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'


const fetchUserByEmail = (email) => {
    return axios.get(`http://localhost:4000/users/${email}`)
}

const fetchCourses = (channelId) => {
    return axios.get(`http://localhost:4000/channels/${channelId}`)
}

const DependentQueries = ({ email }) => {

    const { data: user} = useQuery(["email", email], () => fetchUserByEmail(email), {})
    console.log(user?.data.channelId);
    const channelId = user?.data.channelId

    useQuery(['email-courses', channelId], () => fetchCourses(channelId), {
        enabled : !!channelId  //converting it to boolean to see if it exists or not
    })

    return (
      <div>
            {
                // data?.data.map((each) => {
                //     return (
                //         <p>{each.id}</p>
                //     )
                // })
                // <p>{data.id}</p>

          }
    </div>
  )
}

export default DependentQueries