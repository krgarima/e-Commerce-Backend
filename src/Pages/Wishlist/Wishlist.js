import React, {useState} from 'react';
import WishlistCard from "../../Components/WishlistCard/WishlistCard";
import "./Wishlist.css";
import { v4 as uuid } from "uuid";

export default function Wishlist() {

    const [Wishlist, setWishlist] = useState([ 
      {
        _id: uuid(),
        title: "Quizine: India Map Poster Activity Kit. Have Fun answering The Questions with Stickers on India's Poster! ",
        price: "499",
        discount: "23% off",
        minAge: "4 years",
        maxAge: "above",
        categoryName: "Puzzles",
        imgUrl: "/assets/productImages/prod3.jpg",
      },
  ]);



  return (
    <div>

        <div class="allWishlistProducts">

            <h1 class="wishlist-Products-heading">My Wishlist (1)</h1>
            <div class="myProduct">

                <WishlistCard products={Wishlist}/>

            </div>
        </div>

    </div>
  )
}
