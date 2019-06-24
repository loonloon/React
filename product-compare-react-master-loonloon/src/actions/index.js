import { GET_PRODUCTS, COMPARE_PRODUCT } from "./types";
import productList from "../data/products.json";

export const getProducts = () => {
  return {
    type: GET_PRODUCTS,
    payload: productList
  };
};

export const compareProduct = product => {
  return {
    type: COMPARE_PRODUCT,
    payload: product
  };
};
