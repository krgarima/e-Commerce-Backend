import React, { useContext } from "react";
import products from "../../backend/db/products";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext, WishlistContext } from "../../Context";
import { toast } from "react-toastify";
import "./ProductDetails.css";

export default function ProductDetails() {
  const productList = products.products;
  const { productId } = useParams();
  const { dispatch } = useContext(CartContext);
  const { wishlistDispatch } = useContext(WishlistContext);
  const navigate = useNavigate();

  const findProduct = productList.find((product) => product._id === productId);

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

  const {
    discount,
    imgUrl,
    price,
    rating,
    sellingPrice,
    title,
    details,
    about,
  } = findProduct;

  return (
    <div className="details-container">
      <div className="product-details">
        <aside className="item-display">
          <img src={imgUrl} alt="product-image" className="item-image" />
          <i
            className={
              findProduct.isFavorite
                ? "fas fa-3x fa-heart wish-icon markFavorite"
                : "fas fa-3x fa-heart wish-icon"
            }
            onClick={() => {
              wishlistDispatch({
                type: "ADD_TO_WISHLIST",
                payload: { product: { ...findProduct, id: productId } },
              });
              notify("Item added to the Wishlist!");
            }}
          ></i>
          <div>
            <button
              className="btn-addToCart"
              onClick={() => {
                dispatch({
                  type: "ADDED",
                  payload: { product: { ...findProduct, id: productId } },
                });
                notify("Item added to the Cart!");
              }}
            >
              Add to Cart
            </button>
            <button
              className="btn-buyNow"
              onClick={() => {
                dispatch({
                  type: "ADDED",
                  payload: { product: { ...findProduct, id: productId } },
                });
                navigate("/Checkout");
              }}
            >
              Buy now
            </button>
          </div>
        </aside>

        <aside className="item-details">
          <h2 className="third-heading">{title}</h2>
          <p className="item-price">
            ??? {price}
            <strike>??? {sellingPrice}</strike>
            <span className="discount">({discount})</span>
          </p>

          <div className="star__ratings">
            <span className="rating__number">Rating: {rating}</span>
            <i className="fa fa-star" aria-hidden="true"></i>
          </div>

          <h3 className="heading">About this item: </h3>
          <p>{about}</p>

          <h3 className="heading">Specifications</h3>
          <table>
            <thead></thead>

            <tbody>
              {details.map((row) =>
                Object.entries(row).map(([key, value]) => (
                  <tr>
                    <td className="table-key">{key}</td>
                    <td>{value}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </aside>
      </div>
    </div>
  );
}
