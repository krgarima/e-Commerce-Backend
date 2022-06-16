import React, { useState, useContext } from "react";
import { ProductContext } from "../../Context/product-context";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./Search.css";

export default function Search() {
  const [search, setSearch] = useState("");
  const { products } = useContext(ProductContext);
  const [searchList, setSearchList] = useState([]);
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const newList = products.filter((product) => {
      if (
        product.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        product.categoryName
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      ) {
        return product;
      }
    });
    setSearchList(newList);
    let len = newList.length;
    if (len > 0) setSuccessMsg(`Found ${len} products with matching name`);
    else setSuccessMsg("Match not found!");
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const newList = products.filter((product) => {
      if (
        product.title.toLowerCase().includes(search) ||
        product.categoryName.toLowerCase().includes(search)
      ) {
        return product;
      }
    });
    setSearchList(newList);
    let len = newList.length;
    if (len > 0) setSuccessMsg(`Found ${len} products with matching name`);
    else setSuccessMsg("Match not found!");
  };

  return (
    <div className="searchContainer">
      <input
        className="search-input"
        placeholder="Search for animals, puzzles, rakhi, creative"
        value={search}
        onChange={handleChange}
      />
      <i className="fas fa-2x fa-search" onClick={handleSearch}></i>

      <div className="success-msg">{successMsg}</div>
      <div className="searchList">
        <ProductCard products={searchList} />
      </div>
    </div>
  );
}
