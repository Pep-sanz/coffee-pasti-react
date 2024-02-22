import { createSlice } from "@reduxjs/toolkit";
import { getDataUser } from "../fetchApi";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDataUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDataUser.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
      })
      .addCase(getDataUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
