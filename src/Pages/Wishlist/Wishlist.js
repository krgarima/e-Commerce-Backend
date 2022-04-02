import React, { useContext } from "react";
import WishlistCard from "../../Components/WishlistCard/WishlistCard";
import "./Wishlist.css";
import { WishlistContext } from "../../Context/wishlist-context";

export default function Wishlist() {
  const { wishlist } = useContext(WishlistContext);
  return (
    <div>
      <div className="allWishlistProducts">
        <h1 className="wishlist-Products-heading">
          My Wishlist ({wishlist.length})
        </h1>
        <div className="myProduct">
          <WishlistCard products={Wishlist} />
        </div>
      </div>
    </div>
  );
}
