import { createSlice } from "@reduxjs/toolkit";
import { productsApi } from "../fetchApi";
import numeral from "numeral";

numeral.register("locale", "id", {
  delimiters: {
    thousands: ".",
    decimal: ",",
  },
  abbreviations: {
    thousand: "rb",
    million: "jt",
    billion: "m",
    trillion: "t",
  },
  currency: {
    symbol: "Rp",
  },
});

const initialState = {
  products: [],
  headerCategory: "All Menu",
  filterProducts: [],
  search: [],
  loading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.headerCategory = action.payload;
      state.filterProducts = state.products.filter((res) => {
        return res.kategori === action.payload;
      });
    },
    getSearchValue: (state, action) => {
      const searchKeyWord = action.payload.toLowerCase().split("");
      if (searchKeyWord.length < 2) {
        state.search = [];
        return;
      }
      const searchValue = state.products.filter((res) => {
        const titleProduct = res.title.toLowerCase();
        return searchKeyWord.every((keyword) => titleProduct.includes(keyword));
      });
      state.search = searchValue;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(productsApi.pending, (state) => {
        state.loading = true;
      })
      .addCase(productsApi.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(productsApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setCategory, getSearchValue } = productsSlice.actions;
