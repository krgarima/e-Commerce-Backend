import React, { useContext, useEffect } from "react";
import WishlistCard from "../../Components/WishlistCard/WishlistCard";
import { WishlistContext } from "../../Context/wishlist-context";
import "./Wishlist.css";

export default function Wishlist() {
  const { wishlist } = useContext(WishlistContext);

  useEffect(() => {
    document.title = "My Wishlist | Blackmole";
  }, []);

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
