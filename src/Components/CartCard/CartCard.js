import React, { useContext } from "react";
import "./CartCard.css";
import { CartContext } from "../../Context/cart-context.js";
import { WishlistContext } from "../../Context/wishlist-context";

export default function CartCard() {
  const { cart, dispatch } = useContext(CartContext);
  const { wishlistDispatch } = useContext(WishlistContext);

  return (
    <div className="wishlist-container">
      {cart.map((product) => {
        return (
          <li className="list-product" key={product.id}>
            <div className="card2 horizontal-Card">
              <aside className="float-cardLeft">
                <div className="background-Image">
                  <img
                    className="card-img2"
                    src={product.imgUrl}
                    alt="productImg"
                  />
                </div>
              </aside>
              <aside>
                <div className="card-title2">
                  <h2>{product.title}</h2>
                </div>
                <div className="description1">
                  <p className="item-price">₹ {product.price}</p>
                  <p>
                    <label htmlFor="quantity">
                      Quantity:{" "}
                      <button
                        className="btn-changeQty"
                        onClick={() =>
                          dispatch({
                            type: "REDUCE",
                            payload: { product: product },
                          })
                        }
                      >
                        {product.quantity === 1 ? (
                          <i class="fas fa-trash"></i>
                        ) : (
                          "-"
                        )}
                      </button>
                      {product.quantity}
                      <button
                        className="btn-changeQty"
                        onClick={() =>
                          dispatch({
                            type: "ADDED",
                            payload: { product: product },
                          })
                        }
                      >
                        +
                      </button>
                    </label>
                  </p>
                </div>
                <div className="horizontalCard-footer">
                  <button
                    className="horizontal-btn removeItem-btn"
                    onClick={() =>
                      dispatch({
                        type: "DELETED",
                        payload: { product: product },
                      })
                    }
                  >
                    Remove from Cart
                  </button>
                  <button
                    className="horizontal-btn moveItem-btn"
                    onClick={() =>
                      wishlistDispatch({
                        type: "ADD_TO_WISHLIST",
                        payload: { product: product },
                      })
                    }
                  >
                    Move to Wishlist
                  </button>
                </div>
              </aside>
            </div>
          </li>
        );
      })}

      {cart.length === 0 && (
        <iframe
          className="empty-gif"
          src="https://giphy.com/embed/THCGaeGUPBbqjeLqlE"
        ></iframe>
      )}
    </div>
  );
}
