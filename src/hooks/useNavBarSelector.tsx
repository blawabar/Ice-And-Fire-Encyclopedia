import { useSelector } from "react-redux";
import { RootState } from "../data/store";

const useNavBarSelector = () =>
  useSelector(
    ({
      requestData: { gender, culture, pageSize },
      currentPage,
      lastPage,
      data,
    }: RootState) => ({
      rootGender: gender || "",
      rootCulture: culture || "",
      rootRowsPerPage: pageSize,
      rootCurrentPage: currentPage,
      rootLastPage: lastPage,
      isNavBarHidden: !Boolean(data.length),
    }),
  );

export default useNavBarSelector;
