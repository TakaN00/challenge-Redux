import React from 'react'
import ProductCard from './ProductCard'
import Add from './Add'
import {useSelector} from 'react-redux'

const ProductList = (props) => {
  
  const list = useSelector(state=>state.productReducer.productList)

  return (
    <div>
      <div className='container listContainer'>
        {list.map((el) => <ProductCard key={el.id} id={el.id} fam={el.fam} subfam={el.subfam} description={el.description} color={el.color} poster={el.poster} price={el.price}/>)}
      </div>
      <div className='addButton'>
        <Add/>
      </div>
    </div>
  )
}

export default ProductList