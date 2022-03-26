import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductContextProvider } from "./Context/product-context";
import { CartContextProvider } from "./Context/cart-context";
import { WishlistContextProvider } from "./Context/wishlist-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <WishlistContextProvider>
        <CartContextProvider>
          <ProductContextProvider>
            <App />
          </ProductContextProvider>
        </CartContextProvider>
      </WishlistContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
