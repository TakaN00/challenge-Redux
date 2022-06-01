import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = (props) => {
    const params = useParams()
    const product = props.list.find((el)=>el.id==params.id)
  return (
    <div className='container detailsContainer'>
        <div className='detailsDesc'>
            <h2>{product.fam}</h2>
            <h3>{product.subfam}</h3>
            <h3>{product.price}</h3>
            <p>{product.description}</p>
            <h4>Color:{product.color}</h4>
            {product.poster.map((image, index) => <img key={index} src={image} alt={image}/>)}
        </div>
    </div>
  )
}

export default ProductDetails