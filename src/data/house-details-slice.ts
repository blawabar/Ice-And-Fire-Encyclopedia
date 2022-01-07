import { createSlice } from "@reduxjs/toolkit";

import { HouseDetailsState } from "./types/house-types";

import {
  getHouseDataPending,
  getHouseDataFulfilled,
  getHouseDataRejected,
} from "./house-details-thunk";

const INITIAL_STATE: HouseDetailsState = {
  isLoading: false,
};

const houseDetailsSlice = createSlice({
  name: "houseDetails",
  initialState: INITIAL_STATE,
  reducers: {
    resetHouseState(state) {
      delete state.houseData;
      delete state.error;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHouseDataPending, (state) => {
        state.isLoading = true;
      })
      .addCase(getHouseDataFulfilled, (state, action) => {
        const houseData = action.payload;
        return { ...state, isLoading: false, houseData };
      })
      .addCase(getHouseDataRejected, (state, action) => {
        const error = action.payload;
        return { ...state, isLoading: false, error };
      });
  },
});

export const { resetHouseState } = houseDetailsSlice.actions;

export default houseDetailsSlice.reducer;
