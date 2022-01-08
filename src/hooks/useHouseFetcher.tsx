import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROOT_URL } from "../data/constants";

import { getHouseData } from "../data/house-details-thunk";
import useHousePageSelector from "./useHousePageSelector";

const useHouseFetcher = (houseId: string) => {
  const dispatch = useDispatch();
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
