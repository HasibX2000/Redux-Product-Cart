import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/reducer";
import cartReudcer from "./carts/reducer";

const store = configureStore({
  reducer: {
    products: productReducer,
    carts: cartReudcer,
  },
});

export default store;
