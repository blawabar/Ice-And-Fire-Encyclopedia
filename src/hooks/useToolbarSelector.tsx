import { useSelector } from "react-redux";
import { RootState } from "../data/store";

const useToolbarSelector = () =>
  useSelector(
    ({ requestData: { pageSize, gender, culture }, isLoading }: RootState) => ({
      rootPageSize: pageSize,
      rootGender: gender || "",
      rootCulture: culture || "",
      isToolbarDisabled: Boolean(isLoading),
    }),
  );

export default useToolbarSelector;
