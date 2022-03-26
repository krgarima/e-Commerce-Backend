import React, { useContext } from "react";
import "./CartCard.css";
import { CartContext } from "../../Context/cart-context.js";

export default function CartCard({ cartList }) {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="wishlist-container">
      {cartList.map((product) => {
        return (
          <li className="list-product" key={product.id}>
            <div className="card2 horizontal-Card">
              <aside className="float-cardLeft">
                <div className="background-Image">
                  <img className="card-img2" src={product.imgUrl} alt="photo" />
                </div>
              </aside>
              <aside>
                <div className="card-title2">
                  <h2>{product.title}</h2>
                </div>
                <div className="description1">
                  <p className="item-price">₹ {product.price}</p>
                  <p>
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                      className="itemQuantity"
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="1"
                      max="5"
                      value={product.quantity}
                    />
                  </p>
                </div>
                <div className="horizontalCard-footer">
                  <button
                    className="horizontal-btn removeItem-btn"
                    onClick={() =>
                      dispatch({
                        type: "REMOVED",
                        payload: { product: product },
                      })
                    }
                  >
                    Remove from Cart
                  </button>
                  <button className="horizontal-btn moveItem-btn">
                    Move to Wishlist
                  </button>
                </div>
              </aside>
            </div>
          </li>
        );
      })}
    </div>
  );
}
