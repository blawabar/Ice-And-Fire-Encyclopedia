import { useState, useEffect } from "react";
import { APIProvider } from "../data/api-provider";
import { HouseFetcherState } from "../data/types/house-types";

const useHouseFetcher = (houseId: string) => {
  const [state, setState] = useState<HouseFetcherState>({
    isLoading: true,
  });

  const loadHouse = async (houseId: string) => {
    try {
      const data = await APIProvider.getHouseData(houseId);
      setState((prev) => ({ ...prev, data, isLoading: false }));
    } catch (error) {
      setState((prev) => ({ ...prev, error: error.toString() }));
    }
  };

  useEffect(() => {
    loadHouse(houseId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [houseId]);

  return state;
};

export default useHouseFetcher;
