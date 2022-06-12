import React from "react";
import { Link } from "react-router-dom";
import Edit from "./Edit";
import {useDispatch} from 'react-redux'
import {removeProduct} from '../slices/productSlice'

const ProductCard = (props) => {
  const dispatch = useDispatch()
  const handleRemove = () => {
    dispatch(removeProduct(props.id))
  }
  return (
    <div className="product">
      <Link to={props.id}  style={{ textDecoration: 'none' }}>
        <img src={props.poster[0]} className="poster" alt="alt test" />
        <div className="product-details">
          <div className="description">
            <h4 className="title">{props.fam}</h4>
            {props.subfam}
            <h4 className="price">{props.price}$</h4>
          </div>
        </div>
      </Link>
      <div className="editBtn">
        <Edit id={props.id} fam={props.fam} subfam={props.subfam} description={props.description} color={props.color} poster={props.poster} price={props.price}/>
      </div>
      <div className="removeBtn">
        <button onClick={handleRemove}>
          X
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
