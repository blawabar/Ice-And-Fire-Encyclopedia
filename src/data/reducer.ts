import {
  CharactersActions,
  CharactersActionTypes,
  CharactersState,
} from "./types";

const INITIAL_STATE: CharactersState = {
  data: [],
  isLoading: false,
  error: null,
  currentPage: 1,
  lastPage: 1,
  requestData: {
    page: 1,
    pageSize: 10,
  },
};

export const charactersReducer = (
  state = INITIAL_STATE,
  action: CharactersActions,
): CharactersState => {
  switch (action.type) {
    case CharactersActionTypes.GET_CHARACTERS_REQUEST:
      return { ...state, isLoading: true, error: null, data: [] };

    case CharactersActionTypes.GET_CHARACTERS_SUCCESS:
      const { data, requestData, lastPage } = action.payload;

      return {
        ...state,
        isLoading: false,
        data,
        currentPage: requestData.page,
        lastPage,
        requestData,
      };

    case CharactersActionTypes.GET_CHARACTERS_FAILURE:
      return { ...state, isLoading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};
