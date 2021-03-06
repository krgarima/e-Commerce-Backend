import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CartCard from "../../Components/CartCard/CartCard";
import { CartContext } from "../../Context/cart-context";
import "./Cart.css";

export default function Cart() {
  const { cart } = useContext(CartContext);

  const totalPrice = cart
    .map((cartItem) => cartItem.price * cartItem.quantity)
    .reduce((acc, value) => acc + value, 0);
  const totalQty = cart
    .map((cartItem) => cartItem.quantity)
    .reduce((acc, value) => acc + value, 0);

  useEffect(() => {
    document.title = "My Cart | Blackmole";
  }, []);

  return (
    <div className="cart">
      <h1 className="cart-Heading">
        <span>My Cart</span>
        <span> ({totalQty})</span>
      </h1>
      <div className="cart-Container center wrap">
        <CartCard />

        {cart.length > 0 && (
          <div className="card3 text-Card">
            <div className="card3-title">
              <h2 className="card-details">Price Details</h2>
              <hr />
            </div>
            <div className="description3">
              <p className="space">
                <span>Price:</span>
                <span>₹ {totalPrice}</span>
              </p>
              <p className="space">
                <span>Quantity:</span>
                <span>{totalQty}</span>
              </p>
              <p className="space">
                <span>Discount:</span>
                <span>₹ {totalQty * 100}</span>
              </p>
              <hr />
              <p className="total-price space">
                <span>TOTAL AMOUNT</span>
                <span>₹ {totalPrice - totalQty * 100}</span>
              </p>
              <hr />
              <p>You will save ₹ {totalQty * 100} on this order.</p>
            </div>
            <div className="txtCard-footer">
              <Link to="/Checkout">
                <button className="order-btn">CHECKOUT</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
