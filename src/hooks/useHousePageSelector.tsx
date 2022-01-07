import { useSelector } from "react-redux";
import { RootState } from "../data/store";

const useHousePageSelector = () =>
  useSelector(
    ({ houseDetails: { houseData, isLoading, error } }: RootState) => ({
      houseData,
      isLoading,
      error,
    }),
  );

export default useHousePageSelector;
