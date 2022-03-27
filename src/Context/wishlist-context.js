import React, { useReducer, createContext } from "react";
import wishlistReducer from "../Reducer/wishlist-reducer";

const WishlistContext = createContext();

const WishlistContextProvider = ({ children }) => {
  const [wishlist, wishlistDispatch] = useReducer(wishlistReducer, []);

  return (
    <div>
      <WishlistContext.Provider value={{ wishlist, wishlistDispatch }}>
        {children}
      </WishlistContext.Provider>
    </div>
  );
};

export { WishlistContext, WishlistContextProvider };
