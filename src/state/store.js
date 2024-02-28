import { configureStore } from "@reduxjs/toolkit";
import carrouselReducer from "./slices/carrouselSlice";
import createReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    carrousel: carrouselReducer,
    cart: createReducer,
  },
});
