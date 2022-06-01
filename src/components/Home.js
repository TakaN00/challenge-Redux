import React from 'react'
import ProductList from './ProductList'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const nav = useNavigate()
    const handleRoute = () => {
        nav('/ProductList');
    }
  return (
    <div className='container homeContainer'>
        <img src='images/cover 01.png' alt='cover image'/>
        <button onClick={handleRoute}>Shop now</button>
        <h4>Born a legend and still living like it</h4>
        <img src='images/cover 02.png' alt='cover image 02'/>
    </div>
  )
}

export default Home