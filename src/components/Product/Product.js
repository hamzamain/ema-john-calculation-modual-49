import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = ({ product, handler }) => {
  const { name, img, price, ratings, seller } = product;
  return (
    <div>
      <img src={img} alt="" />
      <div className="product-info">
        <h3>{name}</h3>
        <p>Price: {price}</p>
        <p>seller: {seller}</p>
        <p>Ratings: {ratings} star</p>
      </div>
      <button onClick={() => handler(product)}>
        Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>{" "}
      </button>
    </div>
  );
};

export default Product;
