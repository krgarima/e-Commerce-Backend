export default function cartReducer(state, action) {
  switch (action.type) {
    case "ADDED": {
      if (state.some((cartItem) => cartItem.id === action.payload.product.id)) {
        return state.map((itm) =>
          itm.id === action.payload.product.id
            ? { ...itm, quantity: itm.quantity + 1 }
            : itm
        );
      } else {
        return [...state, action.payload.product];
      }
    }
    case "REDUCE": {
      if (
        state.some(
          (cartItem) =>
            cartItem.id === action.payload.product.id && cartItem.quantity > 1
        )
      ) {
        return state.map((itm) =>
          itm.id === action.payload.product.id
            ? { ...itm, quantity: itm.quantity - 1 }
            : itm
        );
      } else if (
        state.some(
          (cartItem) =>
            cartItem.id === action.payload.product.id && cartItem.quantity === 1
        )
      ) {
        return state.filter((itm) => itm.id !== action.payload.product.id);
      } else {
        return state;
      }
    }
    case "DELETED": {
      return state.filter((itm) => itm.id !== action.payload.product.id);
    }
    default:
      return state;
  }
}
