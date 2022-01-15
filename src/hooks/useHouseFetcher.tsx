import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROOT_URL } from "../data/constants";
import { useAppDispatch } from "../data/hooks";

import { getHouseData } from "../data/house-details-thunk";
import useHousePageSelector from "./useHousePageSelector";

const useHouseFetcher = (houseId: string) => {
  const dispatch = useAppDispatch();
  const houseState = useHousePageSelector();
  const navigate = useNavigate();

  useEffect(() => {
    if (Boolean(houseId)) {
      dispatch(getHouseData(houseId));
    } else {
      navigate(ROOT_URL);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [houseId]);

  return houseState;
};

export default useHouseFetcher;
