import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  CharactersState,
  CharactersFilterData,
  CharactersPaginationData,
} from "./types/character-types";

import {
  getCharactersPending,
  getCharactersFulfilled,
  getCharactersRejected,
} from "./characters-thunk";

const INITIAL_STATE: CharactersState = {
  data: [],
  isLoading: false,
  error: null,
  currentPage: 1,
  lastPage: 1,
  requestData: {
    page: 1,
    pageSize: 25,
    gender: "",
    culture: "",
  },
};

const charactersSlice = createSlice({
  name: "characters",
  initialState: INITIAL_STATE,
  reducers: {
    setCharactersFilter(state, action: PayloadAction<CharactersFilterData>) {
      const { culture, gender } = action.payload;
      const { requestData } = state;

      requestData.page = 1;
      requestData.culture = culture;
      requestData.gender = gender;
    },
    setCharactersPagination(
      state,
      action: PayloadAction<CharactersPaginationData>,
    ) {
      const { page, pageSize } = action.payload;
      const { requestData } = state;

      requestData.page = page;
      requestData.pageSize = pageSize;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCharactersPending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.data = [];
      })
      .addCase(getCharactersFulfilled, (state, action) => {
        const { data, requestData, lastPage } = action.payload;

        state.isLoading = false;
        state.data = data;
        state.currentPage = requestData.page;
        state.lastPage = lastPage;
        state.requestData = requestData;
      })
      .addCase(getCharactersRejected, (state, action) => {
        const error = action.payload as string;

        state.isLoading = false;
        state.error = error;
        state.data = [];
      });
  },
});

export const { setCharactersFilter, setCharactersPagination } =
  charactersSlice.actions;

export default charactersSlice.reducer;
