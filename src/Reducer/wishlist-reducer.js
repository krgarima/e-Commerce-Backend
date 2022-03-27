export default function wishlistReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_WISHLIST": {
      if (
        state.some(
          (wishlistItem) => wishlistItem.id === action.payload.product.id
        )
      ) {
        return state;
      } else {
        return [...state, { ...action.payload.product, isFavorite: true }];
      }
    }

    case "REMOVE_FROM_WISHLIST": {
      if (action.payload.product.isFavorite)
        return state.filter((itm) => itm.id !== action.payload.product.id);
    }

    default:
      return state;
  }
}
