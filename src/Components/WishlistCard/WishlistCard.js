import React, { useContext } from "react";
import { CartContext, WishlistContext } from "../../Context/index";
import { toast } from "react-toastify";
import "./WishlistCard.css";

export default function WishlistCard() {
  const { wishlist, wishlistDispatch } = useContext(WishlistContext);
  const { dispatch } = useContext(CartContext);

  const notify = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  return (
    <div className="wishlist-container">
      {wishlist.map((product) => {
        return (
          <li className="list-product" key={product.id}>
            <div className="card1 vertical-Card">
              <i
                className="fas fa-heart wish-icon markFavorite"
                onClick={() => {
                  wishlistDispatch({
                    type: "REMOVE_FROM_WISHLIST",
                    payload: { product: product },
                  });
                  notify("Item removed from Wishlist!");
                }}
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
                  onClick={() => {
                    dispatch({ type: "ADDED", payload: { product: product } });
                    notify("Item added to the Cart!");
                  }}
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
