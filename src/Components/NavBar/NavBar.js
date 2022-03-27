import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { CartContext } from "../../Context/cart-context.js";
import { WishlistContext } from "../../Context/wishlist-context";

export default function NavBar() {
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  return (
    <div>
      <div className="body__heading space-between">
        <div className="left">
          <i
            className="fas fa-bars fa-2x  hamburgerMenuDismissible"
            id="hamburgerMenuModal1"
          ></i>
          <h3 className="third-heading company-logo">
            <Link to="/">
              <img
                src="/assets/images/logo.png"
                alt="Blackmole"
                srcset=""
                className="Blackmole-logo"
              />
            </Link>
          </h3>
        </div>
        <div className="navIcons">
          <div className="icon-Badge center">
            <Link to="/Wishlist">
              <i className="fas fa-2x fa-heart"></i>
              <div className="badge btn-badge">{wishlist.length}</div>
            </Link>
          </div>

          <div className="icon-Badge center">
            <Link to="/myCart">
              <i className="fas fa-2x fa-shopping-cart" target="_blank"></i>
              <div className="badge btn-badge">
                {cart.reduce((acc, value) => acc + value.quantity, 0)}
              </div>
            </Link>
          </div>

          <button className="log">
            <Link to="/Login">Log In</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
