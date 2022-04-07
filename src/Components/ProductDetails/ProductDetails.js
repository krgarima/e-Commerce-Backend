import React, { useContext } from "react";
import "./ProductDetails.css";
import products from "../../backend/db/products";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductDetails() {
  const productList = products.products;
  const { productId } = useParams();
  const { dispatch } = useContext(CartContext);

  const findProduct = productList.find((product) => product._id === productId);

  const notify = (msg) =>
    toast.success(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
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
            <button className="btn-buyNow">Buy now</button>
          </div>
        </aside>

        <aside className="item-details">
          <h2 className="third-heading">{title}</h2>
          <p className="item-price">
            ₹ {price}
            <strike>₹ {sellingPrice}</strike>
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
