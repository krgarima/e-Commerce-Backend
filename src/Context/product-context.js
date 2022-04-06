import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const notify = (msg) =>
    toast.error(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  useEffect(() => {
    (async function getProducts() {
      try {
        const { data } = await axios.get("/api/products");
        setProducts(data.products);
      } catch (error) {
        notify("Couldn't get data. " + error);
      }
    })();
  }, []);

  return (
    <div>
      <ProductContext.Provider value={{ products, setProducts }}>
        {children}
      </ProductContext.Provider>
      <ToastContainer />
    </div>
  );
};

export { ProductContext, ProductContextProvider };
