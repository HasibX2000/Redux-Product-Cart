import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT,
  DECREMENT,
  ORDER_PLACE,
} from "./actionTypes";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};

export const incrementHandler = (product) => {
  return {
    type: INCREMENT,
    payload: product,
  };
};

export const decrementHandler = (product) => {
  return {
    type: DECREMENT,
    payload: product,
  };
};

export const orderHandler = () => {
  return {
    type: ORDER_PLACE,
  };
};
