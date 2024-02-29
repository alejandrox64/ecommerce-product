import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
