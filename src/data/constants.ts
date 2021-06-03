import { HouseDetailsDictionary } from "./types";

const BASE_URL = "https://anapioficeandfire.com/api";
export const ROOT_URL = "/";

export const CHARACTERS_ENDPOINT = `${BASE_URL}/characters`;
export const HOUSES_ENDPOINT = `${BASE_URL}/houses`;

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
