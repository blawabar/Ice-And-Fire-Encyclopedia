import { configureStore } from "@reduxjs/toolkit";

import charactersReducer from "./characters-slice";
import houseDetailsReducer from "./house-details-slice";

export const store = configureStore({
  reducer: { characters: charactersReducer, houseDetails: houseDetailsReducer },
});
