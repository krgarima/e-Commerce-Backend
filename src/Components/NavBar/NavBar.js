import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext, WishlistContext, AuthContext } from "../../Context/index";
import "./NavBar.css";

export default function NavBar() {
  const encodedToken = localStorage.getItem("token");
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);
  const { setLogged } = useContext(AuthContext);
  const navigate = useNavigate();

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
                navigate("/");
              } else {
                navigate("/login");
              }
            }}
          >
            {encodedToken ? "Log Out" : " Log In"}
          </button>
          <div className="icon-Badge center">
            {encodedToken && (
              <Link to="/Profile">
                <i className="fas fa-2x fa-user-circle"></i>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
