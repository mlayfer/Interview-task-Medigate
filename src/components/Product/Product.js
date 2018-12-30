import React from "react";
import PropTypes from "prop-types";
import "./Product.css";

const Product = ({product, onBuyClick, onEditClick, onDeleteClick}) => {
  return (
    <div className="product">
      <div className="product-image-container">
        <img alt={product.name} className="product-image" src={product.imageUrl}/>
      </div>
      <div className="product-name">
        Product Name: {product.name}
      </div>
      <div className="product-quantity">
        Quantity: {product.quantity}
      </div>
      <div className="product-price">
        Price: {product.price}$
      </div>
      <div className="product-actions">
        <div className="product-buy-btn btn" onClick={() => onBuyClick(product)}>Buy</div>
        <div className="product-edit-btn btn" onClick={() => onEditClick(product)}>Edit</div>
        <div className="product-delete-btn btn" onClick={() => onDeleteClick(product)}>Delete</div>
      </div>
    </div>
  )
}

Product.propTypes = {
  prop1: PropTypes.any
}

export default Product;
