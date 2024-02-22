import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
    loading: false,
    error: null,
    quantity: 0,
    total: 0,
  },
  reducers: {
    updateCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { updateCart } = cartSlice.actions;
