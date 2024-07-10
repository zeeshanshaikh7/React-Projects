import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
    <>
        <div className='w-full p-20 bg-green-300 text-center text-3xl font-bold'>
            user : {id}
        </div>
    </>
  )
}

export default User