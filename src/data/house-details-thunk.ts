import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIProvider } from "./api-provider";
import { House } from "./types/house-types";

export const getHouseData = createAsyncThunk<
  House,
  string,
  { rejectValue: string }
>("houseDetails/getHouseData", async (houseId, { rejectWithValue }) => {
  try {
    return await APIProvider.getHouseData(houseId);
  } catch (error) {
    return rejectWithValue(
      `Error during getting house data: ${(error as Error).toString()}`,
    );
  }
});

export const {
  pending: getHouseDataPending,
  fulfilled: getHouseDataFulfilled,
  rejected: getHouseDataRejected,
} = getHouseData;
