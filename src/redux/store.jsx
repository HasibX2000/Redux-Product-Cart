import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../redux/products/ProductReducer";

const store = configureStore({
  reducer: {
    products: ProductReducer,
  },
});

export default store;
