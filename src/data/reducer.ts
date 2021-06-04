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
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
        currentPage: action.payload.requestData.page,
        lastPage: action.payload.lastPage,
        requestData: action.payload.requestData,
      };

    case CharactersActionTypes.GET_CHARACTERS_FAILURE:
      return { ...state, isLoading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};
