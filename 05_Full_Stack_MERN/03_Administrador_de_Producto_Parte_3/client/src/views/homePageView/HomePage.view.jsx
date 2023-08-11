import React, { useState, useEffect } from "react";
import axios from "axios";

import ProductForm from "../../components/ProductForm.component";
import ProductList from "../../components/ProductList.component";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  function handleAddProducts(item) {
    // In this case item is res.data which is an object literal having {title, price, description}
    setProducts((items) => [...items, item]);
  }

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log("Error: ", err));
  }, []);

  const removeFromDom = (productId) => {
    // This function will reload the ReactDom by updating the products list array
    setProducts(products.filter((prod) => prod._id !== productId)); // Remember productId and prod are just arguments
  };

  return (
    <div>
      <ProductForm products={products} onAddProducts={handleAddProducts} />
      <ProductList products={products} removeFromDom={removeFromDom} />
    </div>
  );
};

export default HomePage;
