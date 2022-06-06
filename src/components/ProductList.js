import React from 'react'
import ProductCard from './ProductCard'
import { useState, useEffect } from 'react'
import Add from './Add'

const ProductList = (props) => {
  
  const [items, setItems] = useState(props.list)

  const getAdd=(newProduct)=>{
    setItems([...items,newProduct])
  } 

  useEffect(()=>{
    props.getList(items)
  })


  return (
    <div>
      <div className='container listContainer'>
        {items.map((el) => <ProductCard key={el.id} id={el.id} fam={el.fam} subfam={el.subfam} poster={el.poster} price={el.price}/>)}
      </div>
      <div className='addButton'>
        <Add getAdd={getAdd}/>
      </div>
    </div>
  )
}

export default ProductList