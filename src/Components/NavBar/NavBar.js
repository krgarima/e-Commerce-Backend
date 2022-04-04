import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { CartContext } from "../../Context/cart-context.js";
import { WishlistContext } from "../../Context/wishlist-context";
import { AuthContext } from "../../Context/auth-context";

export default function NavBar() {
  const encodedToken = localStorage.getItem("token");
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);
  const { setLogged } = useContext(AuthContext);

  return (
    <div>
      <div className="body__heading space-between">
        <div className="left">
          <h3 className="third-heading company-logo">
            <Link to="/">
              <img
                src="/assets/images/logo.png"
                alt="Blackmole"
                className="Blackmole-logo"
              />
            </Link>
          </h3>

          <Link to="/Search">
            <i className="fas fa-2x fa-search"></i>
          </Link>
        </div>
        <div className="navIcons">
          <div className="icon-Badge center">
            <Link to="/Wishlist">
              <i className="fas fa-2x fa-heart"></i>
              <div className="badge btn-badge">{wishlist.length}</div>
            </Link>
          </div>

          <div className="icon-Badge center">
            <Link to="/Cart">
              <i className="fas fa-2x fa-shopping-cart" target="_blank"></i>
              <div className="badge btn-badge">
                {cart.reduce((acc, value) => acc + value.quantity, 0)}
              </div>
            </Link>
          </div>

          <button
            className="log"
            onClick={() => {
              if (encodedToken) {
                setLogged(false);
                localStorage.removeItem("token");
              }
            }}
          >
            {encodedToken ? (
              <Link to="/Login">Log Out</Link>
            ) : (
              <Link to="/Login">Log In</Link>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
