import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

import charactersReducer from "./characters-slice";
// TODO: Add housesReducer

export const store = configureStore({
  reducer: { characters: charactersReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
