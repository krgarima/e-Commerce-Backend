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
              <div class="card1 vertical-Card">
                <div class="background-Image">
                  <img class="card-img1" src={imgUrl} alt="photo" />
                </div>
                <div class="card-title">
                  <h2>{title}</h2>
                </div>
                <div class="description1">
                  <p class="item-price">
                    {price}
                    <strike>₹ 700</strike>
                    <span class="discount">({discount})</span>
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
