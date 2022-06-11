import React, { useContext } from "react";
import { CartContext, WishlistContext } from "../../Context/index";
import { AuthContext } from "../../Context/auth-context";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./ProductCard.css";

export default function ProductCard({ products }) {
  const { dispatch } = useContext(CartContext);
  const { wishlistDispatch } = useContext(WishlistContext);
  const { logged } = useContext(AuthContext);
  const navigate = useNavigate();

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
    <div className="products-container">
      {products ? (
        products.map((product) => {
          return (
            <li className="list-product" key={product.id}>
              <div className="card1 vertical-Card">
                <i
                  className={
                    product.isFavorite
                      ? "fas fa-heart wish-icon markFavorite"
                      : "fas fa-heart wish-icon"
                  }
                  onClick={() => {
                    logged
                      ? wishlistDispatch({
                          type: "ADD_TO_WISHLIST",
                          payload: { product: product },
                        })
                      : navigate("/login");
                    logged && notify("Item added to the Wishlist!");
                  }}
                ></i>
                <div className="background-Image">
                  <Link to={`/ProductDetails/${product._id}`}>
                    <img
                      className="card-img1"
                      src={product.imgUrl}
                      alt="card-photo"
                    />
                  </Link>
                </div>
                <div className="card-title">
                  <h2>{product.title}</h2>
                </div>
                <div className="description1">
                  <p className="item-price">
                    ₹ {product.price}
                    <strike>₹ 700</strike>
                    <span className="discount">({product.discount})</span>
                  </p>
                  <div className="star__ratings">
                    <span className="rating__number">
                      Rating: {product.rating}
                    </span>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <p className="item-ageGroup">
                    Ages: {product.minAge} and {product.maxAge}
                  </p>
                </div>
                <div className="verticalCard-footer">
                  <button
                    className="addItem-btn"
                    onClick={() => {
                      logged
                        ? dispatch({
                            type: "ADDED",
                            payload: { product: product },
                          })
                        : navigate("/login");
                      logged && notify("Item added to the Cart!");
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </li>
          );
        })
      ) : (
        <i className="fas fa-spinner fa-6x fa-spin"></i>
      )}
    </div>
  );
}
