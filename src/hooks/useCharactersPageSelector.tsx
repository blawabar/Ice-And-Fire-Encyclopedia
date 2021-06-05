import { useSelector } from "react-redux";
import { RootState } from "../data/store";

const useCharactersPageSelector = () =>
  useSelector(
    ({
      data,
      isLoading,
      error,
      requestData: { pageSize, page },
    }: RootState) => ({
      data,
      isLoading,
      error,
      pageSize,
      page,
    }),
  );

export default useCharactersPageSelector;
