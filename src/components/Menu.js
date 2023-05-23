import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Menu() {

    let navigate = useNavigate()

  return (
    <div className='text-center'>
      <h1>welcome</h1>
      <Button variant='danger' onClick={()=>navigate('/login')}>Logout</Button>
    </div>
  )
}

export default Menu
