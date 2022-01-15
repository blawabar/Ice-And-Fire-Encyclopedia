import { useAppSelector } from "../data/hooks";

const useHousePageSelector = () =>
  useAppSelector(({ houseDetails: { houseData, isLoading, error } }) => ({
    houseData,
    isLoading,
    error,
  }));

export default useHousePageSelector;
