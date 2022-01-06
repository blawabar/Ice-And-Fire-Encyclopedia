import { useSelector } from "react-redux";
import { RootState } from "../data/store";

const useNavBarSelector = () =>
  useSelector(
    ({
      characters: {
        requestData: { pageSize: rootPageSize },
        currentPage,
        lastPage,
        data,
      },
    }: RootState) => ({
      rootPageSize,
      rootCurrentPage: currentPage,
      rootLastPage: lastPage,
      isNavBarHidden: !Boolean(data.length),
      isDisplayingFirstPage: currentPage === 1,
      isDisplayingLastPage: currentPage === lastPage,
    }),
  );

export default useNavBarSelector;
