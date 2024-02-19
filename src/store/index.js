import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./slice/productSlice";
import { cartSlice } from "./slice/cartSlice";
import { userSlice } from "./slice/userSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    user: userSlice.reducer,
  },
});
