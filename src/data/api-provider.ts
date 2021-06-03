import { HOUSES_ENDPOINT, HOUSE_FETCHING_ERROR_MSG } from "./constants";
import { House } from "./types";

export class APIProvider {
  public static async getHouseData(houseId: string): Promise<House> {
    try {
      let responseData: House;
      let response = await fetch(`${HOUSES_ENDPOINT}/${houseId}`);

      if (response.ok) {
        responseData = await response.json();
        return responseData;
      } else {
        const status = response.status;
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
}
