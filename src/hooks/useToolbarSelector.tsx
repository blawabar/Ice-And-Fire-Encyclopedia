import { useAppSelector } from "../data/hooks";

const useToolbarSelector = () =>
  useAppSelector(
    ({
      characters: {
        requestData: { gender, culture },
        isLoading,
      },
    }) => ({
      rootGender: gender,
      rootCulture: culture,
      isToolbarDisabled: Boolean(isLoading),
    }),
  );

export default useToolbarSelector;
