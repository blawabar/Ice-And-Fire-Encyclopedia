import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getCharacters } from "../data/characters-thunk";
import useCharactersPageSelector from "./useCharactersPageSelector";

const useCharactersFetcher = () => {
  const dispatch = useDispatch();

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
