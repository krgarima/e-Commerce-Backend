import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { CartContext } from "../../Context/cart-context.js";
import { WishlistContext } from "../../Context/wishlist-context";

export default function NavBar() {
  const { cart } = useContext(CartContext);
  const { wishlist, wishlistDispatch } = useContext(WishlistContext);

  return (
    <div>
      <div class="body__heading space-between">
        <div class="left">
          <i
            class="fas fa-bars fa-2x  hamburgerMenuDismissible"
            id="hamburgerMenuModal1"
          ></i>
          <h3 class="third-heading company-logo">
            <Link to="/">Blackmole</Link>
          </h3>
        </div>
        <div class="navIcons">
          <div class="icon-Badge center">
            <Link to="/Wishlist">
              <i className="fas fa-2x fa-heart"></i>
              <div class="badge btn-badge">{wishlist.length}</div>
            </Link>
          </div>

          <div class="icon-Badge center">
            <Link to="/myCart">
              <i className="fas fa-2x fa-shopping-cart" target="_blank"></i>
              <div class="badge btn-badge">
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
