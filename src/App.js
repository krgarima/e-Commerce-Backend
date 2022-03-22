import "./App.css";

import { Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import ProductListing from "./Pages/ProductListing/ProductListing";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Cart from "./Pages/Cart/Cart";
import Wishlist from "./Pages/Wishlist/Wishlist";

function App() {

  return (
    <div className="App">
      
      <NavBar />    

        <main>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductListing" element={<ProductListing />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/myCart" element={<Cart />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        </Routes> 
        </main>
      <Footer />

    </div>
  );
}

export default App;