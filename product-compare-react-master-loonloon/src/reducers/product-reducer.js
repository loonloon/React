import { GET_PRODUCTS, COMPARE_PRODUCT } from "../actions/types";

const INITIAL_STATE = {
  products: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.products.map(product => ({
          ...product,
          compare: false
        }))
      };
    case COMPARE_PRODUCT:
      const products = state.products.map(product =>
        product.id === action.payload.id
          ? { ...product, compare: !product.compare }
          : product
      );
      return { ...state, products };
    default:
      return state;
  }
};
