import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data= useLoaderData();
   // const [data, setData] = useState([]);
    // useEffect (() =>{
    //     fetch('https://api.github.com/users/mayurr7')
    //     .then(response => response.json())
    //     .then(data =>{
    //         setData(data);
    //         console.log(data);
            
    //     });
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      GitHub followers : {data.followers}
      <br/>
      <div className='text-center text-red-400'>
      Bio : {data.bio}

      </div>
    <img src={data.avatar_url} alt="Git picture" width={300} />
     
    </div>
    
  )
} 

export default Github

//calling API using router

export let gitHubLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/mayurr7')
    return response.json();
}
