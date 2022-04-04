import "./App.css";

import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import ProductListing from "./Pages/ProductListing/ProductListing";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Cart from "./Pages/Cart/Cart";
import Wishlist from "./Pages/Wishlist/Wishlist";
import React from "react";
import Search from "./Pages/Search/Search";
import { AuthContext } from "./Context/auth-context";

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
