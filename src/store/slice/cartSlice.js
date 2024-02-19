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
    addProductsToCart : (state, actions)=>{
      
    }
  },
});

export const { } = cartSlice.actions;
