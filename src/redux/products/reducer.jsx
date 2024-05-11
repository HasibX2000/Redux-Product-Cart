import { initialState } from "./initialState";
import { ADD_PRODUCTS } from "./actionTypes";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DECREMENT,
  INCREMENT,
  ORDER_PLACE,
} from "../carts/actionTypes";

const productReducer = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case ADD_PRODUCTS:
      return [
        ...state,
        {
          id: state.length >= 1 ? state[state.length - 1].id + 1 : 1,
          ...payload,
        },
      ];
    case ADD_TO_CART:
      return state.map((product) => {
        if (product.id === payload.id) {
          return {
            ...product,
            quantity: product.quantity >= 1 ? product.quantity - 1 : 0,
          };
        } else return { ...product };
      });
    case REMOVE_FROM_CART:
      state.map((product) => {
        if (product.id === payload.id) {
          return {
            ...product,
            quantity: product.quantity + payload.quantity,
          };
        } else return { ...product };
      });

    case INCREMENT:
      return state.map((product) => {
        if (product.id === payload.id) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        } else return { ...product };
      });

    case DECREMENT:
      state.map((product) => {
        if (product.id === payload.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        } else return { ...product };
      });
    case ORDER_PLACE:
      return initialState;

    default:
      return [...state];
  }
};
export default productReducer;
