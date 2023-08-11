import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";

// <Route path="/products/:id" element={<DetailsPage/>}/>

const DetailsPage = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams(); // We use the useParams hook to retrieve the route parameter in DetailsPage.We match this to the Route in the index.js file
  // id will identify with the ._id from a particular product
  useEffect(() => {
    getOneProductById();
  }, [id]);
  // This will help add the ._id value at the end of the route.
  const getOneProductById = async () => {
    try {
      let res = await axios.get("http://localhost:8000/api/products/" + id); // This ensures we only receive the one we are looking for.
      setProduct(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // const removeFromDom = (productId) => {
  // This function will reload the ReactDom by updating the products list array
  //  setProduct(product.filter((prod) => prod._id !== productId)); // Remember productId and prod are just arguments
  // };

  const deleteProduct = (productId) => {
    // This function gets executed with product._id as the argument
    axios
      .delete("http://localhost:8000/api/products/" + productId)
      .then((res) => {
        setProduct(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Checking if deletion was successful
  const [deletionSuccess, setDeletionSuccess] = useState(false); // set it originally as false

  return (
    <div>
      <h1>Products Detail Page</h1>
      {product && <p>Title: {product.title}</p>}
      {product && <p>Price: {product.price}</p>}
      {product && <p>Description: {product.description}</p>}
      {product && (
        <button
          onClick={(e) => {
            deleteProduct(product._id);
            setDeletionSuccess(true); // change the state from false to true right after deleting the product
          }}
        >
          Delete
        </button>
      )}
      {deletionSuccess && <Navigate to="/" />}{" "}
      {/*if the deletion was successful take me back to my HomePage*/}
    </div>
  );
};

export default DetailsPage;
