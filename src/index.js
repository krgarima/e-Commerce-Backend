import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductContextProvider } from "./Context/product-context";
import { CartContextProvider } from "./Context/cart-context";
import { WishlistContextProvider } from "./Context/wishlist-context";
import { PrivateRouteContextProvider } from "./Context/privateRoute-context";
import { AuthContextProvider } from "./Context/auth-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <PrivateRouteContextProvider>
          <WishlistContextProvider>
            <CartContextProvider>
              <ProductContextProvider>
                <App />
              </ProductContextProvider>
            </CartContextProvider>
          </WishlistContextProvider>
        </PrivateRouteContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
