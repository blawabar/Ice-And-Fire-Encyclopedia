import { Dispatch } from "react";
import { APIProvider } from "./api-provider";
import { AppThunk } from "./store";
import {
  GetCharactersRequestAction,
  CharactersActionTypes,
  GetCharactersSuccessAction,
  GetCharactersFailureAction,
  CharactersSuccessPayload,
  CharactersActions,
  CharactersRequestData,
  SetCharactersFilterAction,
  SetCharactersPaginationAction,
  CharactersFilterData,
  CharactersPaginationData,
} from "./types";

export const getCharactersRequest = (): GetCharactersRequestAction => ({
  type: CharactersActionTypes.GET_CHARACTERS_REQUEST,
});

export const getCharactersSuccess = (
  payload: CharactersSuccessPayload,
): GetCharactersSuccessAction => ({
  type: CharactersActionTypes.GET_CHARACTERS_SUCCESS,
  payload,
});

export const getCharactersFailure = (
  payload: string,
): GetCharactersFailureAction => ({
  type: CharactersActionTypes.GET_CHARACTERS_FAILURE,
  payload,
});

export const getCharacters =
  (args: CharactersRequestData): AppThunk =>
  async (dispatch: Dispatch<CharactersActions>) => {
    try {
      dispatch(getCharactersRequest());

      const { data, lastPage } = await APIProvider.getCharacters(args);

      dispatch(
        getCharactersSuccess({
          data,
          requestData: args,
          lastPage,
        }),
      );
    } catch (error) {
      dispatch(getCharactersFailure("Error during getting characters data..."));
    }
  };

export const SetCharactersFilter = (
  payload: CharactersFilterData,
): SetCharactersFilterAction => ({
  type: CharactersActionTypes.SET_CHARACTERS_FILTER,
  payload,
});

export const SetCharactersPagination = (
  payload: CharactersPaginationData,
): SetCharactersPaginationAction => ({
  type: CharactersActionTypes.SET_CHARACTERS_PAGINATION,
  payload,
});
