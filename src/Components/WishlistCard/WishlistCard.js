import React, { useContext } from "react";
import "./WishlistCard.css";
import { WishlistContext } from "../../Context/wishlist-context";
import { CartContext } from "../../Context/cart-context.js";

export default function WishlistCard() {
  const { wishlist, wishlistDispatch } = useContext(WishlistContext);
  const { dispatch } = useContext(CartContext);

  return (
    <div className="wishlist-container">
      {wishlist.map((product) => {
        return (
          <li className="list-product" key={product.id}>
            <div className="card1 vertical-Card">
              <i
                className={
                  product.isFavorite
                    ? "fas fa-heart wish-icon markFavorite"
                    : "fas fa-heart wish-icon"
                }
                onClick={() =>
                  wishlistDispatch({
                    type: "REMOVE_FROM_WISHLIST",
                    payload: { product: product },
                  })
                }
              ></i>
              <div className="background-Image">
                <img className="card-img1" src={product.imgUrl} alt="photo" />
              </div>
              <div className="card-title">
                <h2>{product.title}</h2>
              </div>
              <div className="description1">
                <p className="item-price">
                  {product.price}
                  <strike>₹ 700</strike>
                  <span className="discount">({product.discount})</span>
                </p>
                <div className="star__ratings">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fas fa-star-half-alt" aria-hidden="true"></i>
                  <span className="rating__number">1,322 ratings</span>
                </div>
                <p className="item-ageGroup">
                  Ages: {product.minAge} and {product.maxAge}
                </p>
              </div>
              <div className="verticalCard-footer">
                <button
                  className="addItem-btn"
                  onClick={() =>
                    dispatch({ type: "ADDED", payload: { product: product } })
                  }
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </li>
        );
      })}
      {wishlist.length === 0 && (
        <iframe
          className="empty-gif"
          src="https://giphy.com/embed/THCGaeGUPBbqjeLqlE"
        ></iframe>
      )}
    </div>
  );
}
