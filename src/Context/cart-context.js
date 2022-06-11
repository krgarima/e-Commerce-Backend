import React, { useState, useReducer, createContext } from "react";
import cartReducer from "../Reducer/cart-reducer";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const [orderedProducts, setOrderedProducts] = useState({});

  return (
    <div>
      <CartContext.Provider
        value={{ cart, dispatch, orderedProducts, setOrderedProducts }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
};

export { CartContext, CartContextProvider };
