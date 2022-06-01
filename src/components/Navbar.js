import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='header'>
        <div className='nav'>
            <Link to="/" style={{textDecoration:"none"}}><h1>Konoha</h1></Link>
        </div>
    </div>
  )
}

export default Navbar