import { useSelector } from "react-redux";
import { RootState } from "../data/store";

const useCharactersPageSelector = () =>
  useSelector(({ data, isLoading, error, requestData }: RootState) => ({
    data,
    isLoading,
    error,
    requestData,
  }));

export default useCharactersPageSelector;
