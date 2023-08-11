import React from "react";
import { Link } from "react-router-dom";

const ProductList = (props) => {
  // `/products/${product.id}`
  return (
    <div>
      {/* This list receives the products value from the HomePage.*/}
      {/* It then uses maps to create a new array from products with listed paragraph elements containg title values*/}
      {props.products.map((product, index) => (
        <p key={index}>
          {/* Don't forget the id in MongoDB is stored in a key as "._id"*/}
          <Link to={`/products/${product._id}`}>{product.title}</Link>
        </p>
      ))}
    </div>
  );
};

export default ProductList;
