import { useEffect } from "react";

import { getCharacters } from "../data/characters-thunk";
import { useAppDispatch } from "../data/hooks";
import useCharactersPageSelector from "./useCharactersPageSelector";

const useCharactersFetcher = () => {
  const dispatch = useAppDispatch();
  const { requestData, ...rest } = useCharactersPageSelector();

  useEffect(() => {
    dispatch(getCharacters(requestData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    requestData.culture,
    requestData.gender,
    requestData.page,
    requestData.pageSize,
  ]);

  return rest;
};

export default useCharactersFetcher;
