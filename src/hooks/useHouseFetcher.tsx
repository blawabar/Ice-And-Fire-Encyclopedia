import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getHouseData } from "../data/house-details-thunk";
import useHousePageSelector from "./useHousePageSelector";

const useHouseFetcher = (houseId: string) => {
  const dispatch = useDispatch();
  const houseState = useHousePageSelector();

  useEffect(() => {
    dispatch(getHouseData(houseId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [houseId]);

  return houseState;
};

export default useHouseFetcher;
