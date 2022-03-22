import React, {useState, useEffect} from 'react';
import ProductCard from "../../Components/ProductCard/ProductCard";
import axios from 'axios';
import "./ProductListing.css";

export default function ProductListing() {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
      (async function getProducts() {
        try {
          const { data } = await axios.get("/api/products");
          setProducts(data.products);
        }
       catch(error) {
          console.log("Couldn't get data. "+error);
       }
       
      })();
    }, []);
  
    useEffect(() => {
      (async function getCategories() {
        try {
          const { data } = await axios.get("/api/categories");
          setCategories(data.categories);
        }
        catch(error) {
          console.log("Couldn't get data. "+error);
       }
       
      })();
    }, []);

  return (
    <div>

<div className="productsContainer">
        <aside class="filters">
                                                <div class="filter-Clear">
                                                        <span class="filter-heading">Filters</span>
                                                        <span class="clearAll">Clear</span>
                                                </div>
                                                <div class="filter-Price">
                                                        <div class="filter-heading price-label">Price</div>
                                                        <input type="range" min="300" max="1000" value="100"
                                                                class="slider" id="filterRange"/>
                                                </div>
                                                <div class="filter-Category">

                                                        <div class="filter-heading">Category</div>
                                                        <br/>
                                                        <input type="checkbox" name="puzzles" id="filterPuzzle"/>
                                                        <label for="filterPuzzle">Puzzles</label>
                                                        <br/><br/>
                                                        <input type="checkbox" name="learning" id="filterLearning"/>
                                                        <label for="filterLearning">Learning</label>
                                                        <br/><br/>
                                                        <input type="checkbox" name="creative" id="filterCreative"/>
                                                        <label for="filterCreative">Creative</label>
                                                </div>

                                                <div class="filter-Rating">
                                                        <div class="filter-heading">Rating</div>
                                                        <br/>
                                                        <input type="radio" name="fourPlusRating" id="fourPlusRating"/>
                                                        <label for="fourPlusRating">4 Stars & above</label>
                                                        <br/><br/>
                                                        <input type="radio" name="threePlusRating" id="threePlusRating"/>
                                                        <label for="threePlusRating">3 Stars & above</label>
                                                        <br/><br/>
                                                        <input type="radio" name="twoPlusRating" id="twoPlusRating"/>
                                                        <label for="twoPlusRating">2 Stars & above</label>
                                                        <br/><br/>
                                                        <input type="radio" name="onePlusRating" id="onePlusRating"/>
                                                        <label for="onePlusRating">1 Stars & above</label>
                                                </div>
                                                <div class="filter-SortBy">
                                                        <div class="filter-heading">Sort By</div>
                                                        <br/>
                                                        <input type="radio" name="sortLowToHigh" id="sortLowToHigh"/>
                                                        <label for="sortLowToHigh">Price - Low to High</label>
                                                        <br/><br/>
                                                        <input type="radio" name="sortHightToLow" id="sortHightToLow"/>
                                                        <label for="sortHightToLow">Price - High to Low</label>
                                                </div>
        </aside>

        <aside class="allProducts">

            <h1 class="allProducts-heading">All Products</h1>
            <div class="myProduct">

                <ProductCard products={products}/>

            </div>
        </aside>
</div>
    </div>
  )
}
