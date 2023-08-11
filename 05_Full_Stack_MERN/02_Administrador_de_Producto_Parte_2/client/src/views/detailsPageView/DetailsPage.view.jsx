import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// <Route path="/products/:id" element={<DetailsPage/>}/>

const DetailsPage = () => {
  const [product, setProduct] = useState();

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

  return (
    <div>
      <h1>Products Detail Page</h1>
      {product && <p>Title: {product.title}</p>}
      {product && <p>Price: {product.price}</p>}
      {product && <p>Description: {product.description}</p>}
    </div>
  );
};

export default DetailsPage;
