import React, { useReducer, createContext } from "react";
import cartReducer from "../Reducer/cart-reducer";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <div>
      <CartContext.Provider value={{ cart, dispatch }}>
        {children}
      </CartContext.Provider>
    </div>
  );
};

export { CartContext, CartContextProvider };
