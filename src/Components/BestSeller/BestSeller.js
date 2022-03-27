import React, { useContext } from "react";
import { ProductContext } from "../../Context/product-context";

export default function BestSeller() {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product) => {
        return (
          <li className="list-product" key={product.id}>
            {product.isBestSeller === true && (
              <div class="card1 vertical-Card">
                <div class="background-Image">
                  <img class="card-img1" src={product.imgUrl} alt="photo" />
                </div>
                <div class="card-title">
                  <h2>{product.title}</h2>
                </div>
                <div class="description1">
                  <p class="item-price">
                    {product.price}
                    <strike>₹ 700</strike>
                    <span class="discount">({product.discount})</span>
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
