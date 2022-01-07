import { extractLastPageNumber, extractQueryParams } from "../utils";
import {
  CHARACTERS_ENDPOINT,
  HOUSES_ENDPOINT,
  HOUSE_FETCHING_ERROR_MSG,
} from "./constants";
import {
  CharactersRequestData,
  CharactersResponse,
  CharactersData,
} from "./types/character-types";
import { House } from "./types/house-types";

export class APIProvider {
  public static async getHouseData(houseId: string): Promise<House> {
    try {
      let data: House;
      let response = await fetch(`${HOUSES_ENDPOINT}/${houseId}`);

      const { ok, status } = response;

      if (ok) {
        data = await response.json();
        return data;
      } else {
        const isHouseNotFound = status === 404;
        const errorMessage = isHouseNotFound
          ? HOUSE_FETCHING_ERROR_MSG
          : `Something went wrong - Error: ${status}`;

        throw new Error(errorMessage);
      }
    } catch (error) {
      throw error;
    }
  }

  public static async getCharacters(
    args: CharactersRequestData,
  ): Promise<CharactersResponse> {
    try {
      const queryParams = extractQueryParams(args);

      let data: CharactersData;
      let response = await fetch(`${CHARACTERS_ENDPOINT}/?${queryParams}`);

      const { ok, status, headers } = response;

      if (ok) {
        data = await response.json();
        const lastPage = extractLastPageNumber(headers);

        return { data, lastPage };
      } else {
        const errorMessage = `Something went wrong - Error: ${status}`;
        throw new Error(errorMessage);
      }
    } catch (error) {
      throw error;
    }
  }
}
