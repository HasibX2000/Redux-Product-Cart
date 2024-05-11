import {
  ADD_TO_CART,
  DECREMENT,
  INCREMENT,
  ORDER_PLACE,
  REMOVE_FROM_CART,
} from "./actionTypes";
import { initialState } from "./initialState";
const cartReudcer = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case ADD_TO_CART:
      if (payload.quantity >= 1) {
        const exist = state.some((product) => product.id === payload.id);
        if (exist) {
          return state.map((product) => {
            if (product.id === payload.id) {
              return {
                ...product,
                quantity: product.quantity + 1,
              };
            } else return { ...product };
          });
        } else {
          return [...state, { ...payload, quantity: 1 }];
        }
      } else return [...state];
    case INCREMENT:
      return state.map((product) => {
        if (product.id === payload.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        } else return { ...product };
      });
    case DECREMENT:
      return state.map((product) => {
        if (product.id === payload.id) {
          return {
            ...product,
            quantity: product.quantity >= 1 ? product.quantity - 1 : 0,
          };
        } else return { ...product };
      });
    case REMOVE_FROM_CART:
      return state.filter((product) => product.id !== payload.id);

    case ORDER_PLACE:
      return initialState;
    default:
      return [...state];
  }
};

export default cartReudcer;
