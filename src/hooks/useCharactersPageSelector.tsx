import { useSelector } from "react-redux";
import { RootState } from "../data/store";

const useCharactersPageSelector = () =>
  useSelector(
    ({
      data,
      isLoading,
      error,
      requestData: { pageSize, page },
      lastPage,
    }: RootState) => ({
      data,
      isLoading,
      error,
      pageSize,
      page,
      responseMessage: Boolean(data.length)
        ? `Characters (${pageSize * lastPage})`
        : "No characters found",
    }),
  );

export default useCharactersPageSelector;
