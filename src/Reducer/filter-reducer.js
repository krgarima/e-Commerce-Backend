import {
  sortLowToHigh,
  sortHighToLow,
  fourPlusRatingFn,
  withinPriceRange,
  filterByCategory,
} from "../utilities/allFunctions.js";

export const reducer = (state, action) => {
  switch (action.type) {
    case "SORT_LOWTOHIGH": {
      return { ...state, filterData: sortLowToHigh(action.payload) };
    }
    case "SORT_HIGHTOLOW": {
      return { ...state, filterData: sortHighToLow(action.payload) };
    }
    case "SORT_BY_RATING": {
      return { ...state, filterData: fourPlusRatingFn(action.payload) };
    }
    case "FILTER_BY_CATEGORY": {
      return { ...state, filterData: filterByCategory(action.payload) };
    }
    case "PRICE_RANGE": {
      return { ...state, filterData: withinPriceRange(action.payload) };
    }
    default:
      return state;
  }
};
