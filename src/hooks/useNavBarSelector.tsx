import { useAppSelector } from "../data/hooks";

const useNavBarSelector = () =>
  useAppSelector(
    ({
      characters: {
        requestData: { pageSize: rootPageSize },
        currentPage,
        lastPage,
        data,
      },
    }) => ({
      rootPageSize,
      rootCurrentPage: currentPage,
      rootLastPage: lastPage,
      isNavBarHidden: !Boolean(data.length),
      isDisplayingFirstPage: currentPage === 1,
      isDisplayingLastPage: currentPage === lastPage,
    }),
  );

export default useNavBarSelector;
