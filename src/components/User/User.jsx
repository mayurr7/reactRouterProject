import React from 'react'
import { useParams } from 'react-router-dom';

function User() {
  const {userid} = useParams();
  return (
    
    <div className='bg-gray-600  text-center mx-8 py-8 text-3xl font-bold text-white'> User : {userid}</div>
  )
}

export default User
