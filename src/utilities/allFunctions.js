const sortLowToHigh = (arr) => {
  return arr
    .filter((item) => item.inStock === true)
    .sort(function (a, b) {
      return a.price - b.price;
    });
};

const sortHighToLow = (arr) => {
  return arr
    .filter((item) => item.inStock === true)
    .sort(function (a, b) {
      return b.price - a.price;
    });
};

const fourPlusRatingFn = (arr) => {
  const { value, products } = arr;
  return products
    .filter((item) => item.inStock === true)
    .filter((item) => item.rating > value);
};

const withinPriceRange = (arr) => {
  const { value, products } = arr;
  return products.filter((item) => item.price < value);
};

const filterByCategory = (arr) => {
  const { value, products, checked, allProducts } = arr;

  if (checked && value === "Puzzles")
    return allProducts
      .filter((item) => item.inStock === true)
      .filter((item) => item.categoryName === "Puzzles");
  if (checked && value === "Creative")
    return allProducts
      .filter((item) => item.inStock === true)
      .filter((item) => item.categoryName === "Creative");
  // if (!checked && value === "Puzzles")
  //   return allProducts
  //     .filter((item) => item.inStock === true)
  //     .filter((item) => item.categoryName !== "Puzzles");
  // if (!checked && value === "Creative")
  //   return allProducts
  //     .filter((item) => item.inStock === true)
  //     .filter((item) => item.categoryName !== "Creative");

  return allProducts;
};

export {
  sortLowToHigh,
  sortHighToLow,
  fourPlusRatingFn,
  withinPriceRange,
  filterByCategory,
};
