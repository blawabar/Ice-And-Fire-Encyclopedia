export type Character = {
  url: string; //	The hypermedia URL of this resource
  name: string; // The name of this character
  gender: string; // The gender of this character.
  culture: string; // The culture that this character belongs to.
  born: string; // Textual representation of when and where this character was born.
  died: string; // Textual representation of when and where this character died.
  titles: Array<string>; // The titles that this character holds.
  aliases: Array<string>; // The aliases that this character goes by.
  father: string; // The character resource URL of this character's father.
  mother: string; // The character resource URL of this character's mother.
  spouse: string; // Character resource URLs that has had a POV-chapter in this book.
  allegiances: Array<string>; // An array of House resource URLs that this character is loyal to.
  books: Array<string>; // An array of Book resource URLs that this character has been in.
  povBooks: Array<string>; //	An array of Book resource URLs that this character has had a POV-chapter in.
  tvSeries: Array<string>; //	An array of names of the seasons of Game of Thrones that this character has been in.
  playedBy: Array<string>; //	An array of actor names that has played this character in the TV show Game Of Thrones.
};

export type House = {
  url: string; //	The hypermedia URL of this resource
  name: string; // The name of this house
  region: string; // The region that this house resides in.
  coatOfArms: string; // Text describing the coat of arms of this house.
  words: string; //	The words of this house.
  titles: Array<string>; //	The titles that this house holds.
  seats: Array<string>; // The seats that this house holds.
  currentLord: string; //	The Character resource URL of this house's current lord.
  heir: string; // The Character resource URL of this house's heir.
  overlord: string; // The House resource URL that this house answers to.
  founded: string; //	The year that this house was founded.
  founder: string; //	The Character resource URL that founded this house.
  diedOut: string; //	The year that this house died out.
  ancestralWeapons: Array<string>; //	An array of names of the noteworthy weapons that this house owns.
  cadetBranches: Array<string>; // An array of House resource URLs that was founded from this house.
  swornMembers: Array<string>; //	An array of Character resource URLs that are sworn to this house.
  [key: string]: string | Array<string>;
};

type DictionaryKeys =
  | "region"
  | "coatOfArms"
  | "words"
  | "titles"
  | "seats"
  | "diedOut"
  | "overlord"
  | "cadetBranches";

export type HouseDetailsDictionary = Record<DictionaryKeys, string> & {
  [key: string]: string;
};

export type HouseFetcherState = {
  data?: House;
  isLoading: boolean;
  error?: string;
};

export type HouseIdParam = { houseId: string };

export type CharactersRequestData = {
  page: number;
  pageSize: number;
  gender: string;
  culture: string;
};

export type CharactersFilterData = {
  gender: string;
  culture: string;
};

export type CharactersPaginationData = {
  page: number;
  pageSize: number;
};

export type CharactersData = Array<Character>;

export type CharactersResponse = {
  data: CharactersData;
  lastPage: number;
};

export type CharactersState = {
  data: CharactersData;
  isLoading: boolean;
  error: string | null;
  requestData: CharactersRequestData;
  currentPage: number;
  lastPage: number;
};

export type CharactersSuccessPayload = {
  data: CharactersData;
  requestData: CharactersRequestData;
  lastPage: number;
};

export enum CharactersActionTypes {
  GET_CHARACTERS_REQUEST = "GET_CHARACTERS_REQUEST",
  GET_CHARACTERS_SUCCESS = "GET_CHARACTERS_SUCCESS",
  GET_CHARACTERS_FAILURE = "GET_CHARACTERS_FAILURE",
  SET_CHARACTERS_FILTER = "SET_CHARACTERS_FILTER",
  SET_CHARACTERS_PAGINATION = "SET_CHARACTERS_PAGINATION",
}

export type GetCharactersRequestAction = {
  type: CharactersActionTypes.GET_CHARACTERS_REQUEST;
};

export type GetCharactersSuccessAction = {
  type: CharactersActionTypes.GET_CHARACTERS_SUCCESS;
  payload: CharactersSuccessPayload;
};

export type GetCharactersFailureAction = {
  type: CharactersActionTypes.GET_CHARACTERS_FAILURE;
  payload: string;
};

export type SetCharactersFilterAction = {
  type: CharactersActionTypes.SET_CHARACTERS_FILTER;
  payload: CharactersFilterData;
};

export type SetCharactersPaginationAction = {
  type: CharactersActionTypes.SET_CHARACTERS_PAGINATION;
  payload: CharactersPaginationData;
};

export type CharactersActions =
  | GetCharactersRequestAction
  | GetCharactersSuccessAction
  | GetCharactersFailureAction
  | SetCharactersFilterAction
  | SetCharactersPaginationAction;
