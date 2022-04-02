import React, { useContext } from "react";
import { ProductContext } from "../../Context/product-context";

export default function BestSeller() {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map(({ id, title, price, discount, imgUrl, isBestSeller }) => {
        return (
          <li className="list-product" key={id}>
            {isBestSeller === true && (
              <div className="card1 vertical-Card">
                <div className="background-Image">
                  <img
                    className="card-img1"
                    src={imgUrl}
                    alt="bestSellerPhoto"
                  />
                </div>
                <div className="card-title">
                  <h2>{title}</h2>
                </div>
                <div className="description1">
                  <p className="item-price">
                    {price}
                    <strike>₹ 700</strike>
                    <span className="discount">({discount})</span>
                  </p>
                </div>
              </div>
            )}
          </li>
        );
      })}
    </div>
  );
}
