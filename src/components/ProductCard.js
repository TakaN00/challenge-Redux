import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
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
    </div>
  );
};

export default ProductCard;
