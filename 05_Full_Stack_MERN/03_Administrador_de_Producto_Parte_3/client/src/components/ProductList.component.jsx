import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductList = (props) => {
  const { removeFromDom } = props; // We bring removeFromDom from our Homepage view
  const deleteProduct = (productId) => {
    // This function gets executed with product._id as the argument
    axios
      .delete("http://localhost:8000/api/products/" + productId)
      .then((res) => {
        removeFromDom(productId);
      });
  };
  return (
    <div>
      {/* This list receives the products value from the HomePage.*/}
      {/* It then uses maps to create a new array from products with listed paragraph elements containg title values*/}
      {props.products.map((product, index) => (
        <p key={index}>
          {/* Don't forget the id in MongoDB is stored in a key as "._id"*/}
          <Link to={`/products/${product._id}`}>{product.title}</Link>|
          <button
            onClick={(e) => {
              deleteProduct(product._id); // product._id will be used as the argument productId
            }}
          >
            Delete
          </button>
        </p>
      ))}
    </div>
  );
};

export default ProductList;
