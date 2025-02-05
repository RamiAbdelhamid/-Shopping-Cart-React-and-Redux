import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer, // ربط الـ cartReducer مع الـ store
  },
});

export default store;
