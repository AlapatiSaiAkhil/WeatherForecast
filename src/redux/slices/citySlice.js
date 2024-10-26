import { createSlice } from "@reduxjs/toolkit";

const citySlice = createSlice({
  name: "city",
  initialState: {
    city:"kakinada"
  },
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload;
    },
  },
  selectors: {
    getCitySelector: (state) => state.city,
  },
});

export const { changeCity } = citySlice.actions;

export const { getCitySelector } = citySlice.selectors;

export default citySlice.reducer;
