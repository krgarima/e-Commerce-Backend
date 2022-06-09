import React, { useContext, useReducer, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { ProductContext } from "../../Context/product-context";
import { reducer } from "../../Reducer/filter-reducer";
import "./ProductListing.css";

export default function ProductListing() {
  const { products } = useContext(ProductContext);
  const [state, dispatch] = useReducer(reducer, { filterData: [] });
  const [isInRange, setIsInRange] = useState(0);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div>
      <div className="productsContainer">
        <aside>
          <form className={showFilter ? "filters" : "filters hideFilters"}>
            <fieldset className="filter-Clear">
              <span className="filter-heading">Filters</span>
              <button className="clearAll" onClick={() => form.reset()}>
                Clear
              </button>
            </fieldset>

            <fieldset className="filter-Price">
              <div className="filter-heading price-label">Price</div>
              <input
                type="range"
                min="200"
                max="1100"
                className="slider"
                id="filterRange"
                onChange={(e) => {
                  dispatch({
                    type: "PRICE_RANGE",
                    payload: { value: e.target.value, products: products },
                  });
                  setIsInRange(e.target.value);
                }}
              />
              <div id="rangeValue">₹ {isInRange}</div>
            </fieldset>

            <fieldset className="filter-Category">
              <legend className="filter-heading">Category</legend>
              <br />
              <input
                type="checkbox"
                name="puzzles"
                id="filterPuzzle"
                value="Puzzles"
                onChange={(e) =>
                  dispatch({
                    type: "FILTER_BY_CATEGORY",
                    payload: {
                      value: e.target.value,
                      checked: e.target.checked,
                      allProducts: products,
                      products:
                        state.filterData.length === 0
                          ? products
                          : [...state.filterData],
                    },
                  })
                }
              />
              <label htmlFor="filterPuzzle">Puzzles</label>
              <br />

              <br />
              <input
                type="checkbox"
                name="creative"
                id="filterCreative"
                value="Creative"
                onChange={(e) =>
                  dispatch({
                    type: "FILTER_BY_CATEGORY",
                    payload: {
                      value: e.target.value,
                      checked: e.target.checked,
                      allProducts: products,
                      products:
                        state.filterData.length === 0
                          ? products
                          : [...state.filterData],
                    },
                  })
                }
              />
              <label htmlFor="filterCreative">Creative</label>
            </fieldset>

            <fieldset className="filter-Rating">
              <legend className="filter-heading">Rating</legend>
              <br />
              <input
                type="radio"
                name="rating"
                id="fourPlusRating"
                onChange={() =>
                  dispatch({
                    type: "SORT_BY_RATING",
                    payload: { products: products, value: 4 },
                  })
                }
              />
              <label htmlFor="fourPlusRating">4 Stars & above</label>
              <br />
              <br />
              <input
                type="radio"
                name="rating"
                id="threePlusRating"
                onChange={() =>
                  dispatch({
                    type: "SORT_BY_RATING",
                    payload: { products: products, value: 3 },
                  })
                }
              />
              <label htmlFor="threePlusRating">3 Stars & above</label>
              <br />
              <br />
              <input
                type="radio"
                name="rating"
                id="twoPlusRating"
                onChange={() =>
                  dispatch({
                    type: "SORT_BY_RATING",
                    payload: { products: products, value: 2 },
                  })
                }
              />
              <label htmlFor="twoPlusRating">2 Stars & above</label>
              <br />
              <br />
              <input
                type="radio"
                name="rating"
                id="onePlusRating"
                onChange={() =>
                  dispatch({
                    type: "SORT_BY_RATING",
                    payload: { products: products, value: 1 },
                  })
                }
              />
              <label htmlFor="onePlusRating">1 Stars & above</label>
            </fieldset>

            <fieldset className="filter-SortBy">
              <legend className="filter-heading">Sort By</legend>
              <br />
              <input
                type="radio"
                id="sortLowToHigh"
                name="sortByPrice"
                onChange={() =>
                  dispatch({
                    type: "SORT_LOWTOHIGH",
                    payload:
                      state.filterData.length === 0
                        ? products
                        : [...state.filterData],
                  })
                }
              />
              <label htmlFor="sortLowToHigh">Price - Low to High</label>
              <br />
              <br />
              <input
                type="radio"
                id="sortHightToLow"
                name="sortByPrice"
                onChange={() =>
                  dispatch({
                    type: "SORT_HIGHTOLOW",
                    payload:
                      state.filterData.length === 0
                        ? products
                        : [...state.filterData],
                  })
                }
              />
              <label htmlFor="sortHightToLow">Price - High to Low</label>
            </fieldset>
          </form>
        </aside>

        <aside className="allProducts">
          <h1 className="allProducts-heading">All Products</h1>
          <i
            className="fas fa-2x fa-filter"
            onClick={() => setShowFilter(!showFilter)}
          ></i>
          <div className="myProduct">
            {state.filterData.length === 0 ? (
              <ProductCard products={products} />
            ) : (
              <ProductCard products={state.filterData} />
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
