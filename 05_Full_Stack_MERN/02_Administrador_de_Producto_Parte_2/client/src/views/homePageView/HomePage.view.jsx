import React, { useState, useEffect } from "react";
import axios from "axios";

import ProductForm from "../../components/ProductForm.component";
import ProductList from "../../components/ProductList.component";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log("Error: ", err));
  }, []);
  return (
    <div>
      <ProductForm />
      <ProductList products={products} />
    </div>
  );
};

export default HomePage;
