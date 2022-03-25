import React, { useReducer } from "react";
import "./ProductCard.css";

export default function ProductCard({ products }) {
  return (
    <div className="products-container">
      {products.map((product) => {
        return (
          <li className="list-product" key={product.id}>
            <div className="card1 vertical-Card">
              <i className="fas fa-heart wish-icon"></i>
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
                <button className="addItem-btn">Add to Cart</button>
              </div>
            </div>
          </li>
        );
      })}
    </div>
  );
}
