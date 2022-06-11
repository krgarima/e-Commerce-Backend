import "./App.css";
import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import { AuthContext } from "./Context/auth-context";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Checkout from "./Pages/Checkout/Checkout";
import Success from "./Components/Success/Success";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Home,
  ProductListing,
  Login,
  SignUp,
  Cart,
  Wishlist,
  Search,
} from "./Pages/index";
import Profile from "./Pages/Profile/Profile";

function App() {
  const { logged, setLogged } = useContext(AuthContext);

  useEffect(() => {
    if (localStorage.getItem("token")) setLogged(true);
  }, []);

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
          <Route path="/Profile" element={logged ? <Profile /> : <Login />} />
          <Route path="/Wishlist" element={logged ? <Wishlist /> : <Login />} />
          <Route path="/Checkout" element={logged ? <Checkout /> : <Login />} />
          <Route path="/Success" element={logged ? <Success /> : <Login />} />
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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer />
    </div>
  );
}

export default App;
