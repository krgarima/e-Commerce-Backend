import React, { useContext, useEffect } from "react";
import { CartContext } from "../../Context/cart-context";
import { useNavigate } from "react-router-dom";
import "./Success.css";

export default function Success() {
  const { orderedProducts } = useContext(CartContext);
  const navigate = useNavigate();
  const { name, paymentID } = orderedProducts;

  useEffect(() => {
    setTimeout(() => {
      navigate("/ProductListing");
    }, 3000);
  }, []);

  return (
    <div className="cart center flex-column order-Container">
      <p className="order-successful">
        Your order has been placed successfully!
      </p>
      <i className="fas fa-5x fa-check-circle"></i>
      <p>{name}</p>
      <p>Payment ID: {paymentID}</p>
      <p className="order-msg">Happy shopping!!</p>
    </div>
  );
}
