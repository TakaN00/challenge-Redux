import React from 'react'
import ProductCard from './ProductCard'
import { useState } from 'react'

const ProductList = (props) => {
  
  const [items, setItems] = useState(props.list)

  return (
    <div className='container listContainer'>
      {items.map((el) => <ProductCard key={el.id} id={el.id} fam={el.fam} subfam={el.subfam} poster={el.poster} price={el.price}/>)}
    </div>
  )
}

export default ProductList