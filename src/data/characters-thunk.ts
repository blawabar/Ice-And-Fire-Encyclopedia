import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIProvider } from "./api-provider";
import {
  CharactersRequestData,
  CharactersSuccessPayload,
} from "./types/character-types";

export const getCharacters = createAsyncThunk<
  CharactersSuccessPayload,
  CharactersRequestData,
  { rejectValue: string }
>("characters/getCharacters", async (requestData, { rejectWithValue }) => {
  try {
    const { data, lastPage } = await APIProvider.getCharacters(requestData);
    return { data, lastPage, requestData } as CharactersSuccessPayload;
  } catch (error) {
    return rejectWithValue(
      `Error during getting characters data: ${(error as Error).toString()}`,
    );
  }
});

export const {
  fulfilled: getCharactersFulfilled,
  pending: getCharactersPending,
  rejected: getCharactersRejected,
} = getCharacters;
