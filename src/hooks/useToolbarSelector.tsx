import { useSelector } from "react-redux";
import { RootState } from "../data/store";

const useToolbarSelector = () =>
  useSelector(
    ({
      characters: {
        requestData: { gender, culture },
        isLoading,
      },
    }: RootState) => ({
      rootGender: gender,
      rootCulture: culture,
      isToolbarDisabled: Boolean(isLoading),
    }),
  );

export default useToolbarSelector;
