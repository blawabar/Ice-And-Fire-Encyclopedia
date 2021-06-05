import { HouseDetailsDictionary } from "./types/house-types";

export const ROOT_URL = "/";
export const HOUSE_URL = "/house";

const API_BASE_URL = "https://anapioficeandfire.com/api";

export const CHARACTERS_ENDPOINT = `${API_BASE_URL}/characters`;
export const HOUSES_ENDPOINT = `${API_BASE_URL}/houses`;

export const HOUSE_FETCHING_ERROR_MSG =
  "Could not find any house that matches the request, try again!";

export const HOUSE_DETAILS_DICTIONARY: HouseDetailsDictionary = {
  region: "Region",
  coatOfArms: "Coat Of Arms",
  words: "Words",
  titles: "Titles",
  seats: "Seats",
  diedOut: "Has died out",
  overlord: "Has overlord",
  cadetBranches: "Number of Cadet Branches",
};

export enum CharacterColumnName {
  Character = "Character",
  Alive = "Alive",
  Gender = "Gender",
  Culture = "Culture",
  Allegiances = "Allegiances",
  NumberOfBooks = "# of Books",
}

export const CHARACTERS_COLUMNS_NAMES = [
  CharacterColumnName.Character,
  CharacterColumnName.Alive,
  CharacterColumnName.Gender,
  CharacterColumnName.Culture,
  CharacterColumnName.Allegiances,
  CharacterColumnName.NumberOfBooks,
];
