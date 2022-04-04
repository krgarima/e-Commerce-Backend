import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async function getProducts() {
      try {
        const { data } = await axios.get("/api/products");
        setProducts(data.products);
      } catch (error) {
        console.log("Couldn't get data. " + error);
      }
    })();
  }, []);

  return (
    <div>
      <ProductContext.Provider value={{ products, setProducts }}>
        {children}
      </ProductContext.Provider>
    </div>
  );
};

export { ProductContext, ProductContextProvider };
