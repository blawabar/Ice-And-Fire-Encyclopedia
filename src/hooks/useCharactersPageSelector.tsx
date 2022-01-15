import { useAppSelector } from "../data/hooks";

const useCharactersPageSelector = () =>
  useAppSelector(({ characters: { data, isLoading, error, requestData } }) => ({
    data,
    isLoading,
    error,
    requestData,
  }));

export default useCharactersPageSelector;
