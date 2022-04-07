import "./App.css";
import React from "react";
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import { AuthContext } from "./Context/auth-context";
import ProductDetails from "./Components/ProductDetails/ProductDetails";

import {
  Home,
  ProductListing,
  Login,
  SignUp,
  Cart,
  Wishlist,
  Search,
} from "./Pages/index";

function App() {
  const { logged } = useContext(AuthContext);
  return (
    <div className="App">
      <NavBar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductListing" element={<ProductListing />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Cart" element={logged ? <Cart /> : <Login />} />
          <Route path="/Wishlist" element={logged ? <Wishlist /> : <Login />} />
          <Route path="/Search" element={<Search />} />
          <Route
            path="/ProductDetails/:productId"
            element={<ProductDetails />}
          />
          <Route
            path="*"
            element={
              <main
                style={{
                  padding: "1rem",
                  backgroundColor: "var(--background-color)",
                }}
              >
                <p className="error404">404 Page Not Found!</p>
                <p className="error404-msg">
                  Oops!! Looks like you have entered a wrong URL
                </p>
              </main>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
