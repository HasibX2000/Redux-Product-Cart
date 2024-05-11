import { ADD_PRODUCTS } from "./actionTypes";

export const addProducts = (product) => {
  return {
    type: ADD_PRODUCTS,
    payload: product,
  };
};
