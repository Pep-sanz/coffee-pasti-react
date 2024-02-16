import { createSlice } from "@reduxjs/toolkit";
import { getDataCarts } from "../fetchApi";

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
      .addCase(getDataCarts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDataCarts.fulfilled, (state, action) => {
        state.status = "succesed";
        state.cart = action.payload;
      })
      .addCase(getDataCarts.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const { addProductStart, addProductSuccess, addProductFailure } = cartSlice.actions;
