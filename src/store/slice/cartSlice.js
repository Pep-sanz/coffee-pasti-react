import { createSlice } from "@reduxjs/toolkit";
import { getCartProducts } from "../fetchApi";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
    loading: false,
    error: null,
    quantity: 0,
    total: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCartProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCartProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(getCartProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// export const { } = cartSlice.actions;
