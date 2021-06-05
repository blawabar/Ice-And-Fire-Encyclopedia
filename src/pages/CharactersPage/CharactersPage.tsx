import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CharactersTable } from "../../components/CharactersTable";
import { ErrorInfo } from "../../components/ErrorInfo";
import { LoadingIndicator } from "../../components/LoadingIndicator";
import { NavBar } from "../../components/NavBar";
import { Toolbar } from "../../components/Toolbar";
import { getCharacters } from "../../data/actions";
import { useCharactersPageSelector } from "../../hooks";

import "./CharactersPage.scss";

const CharactersPage: React.FC = () => {
  const dispatch = useDispatch();

  const { data, isLoading, error, requestData } = useCharactersPageSelector();

  useEffect(() => {
    dispatch(getCharacters(requestData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    requestData.culture,
    requestData.gender,
    requestData.page,
    requestData.pageSize,
  ]);

  let pageBody = null;

  if (error) {
    pageBody = <ErrorInfo errorMsg={error} />;
  } else if (isLoading) {
    pageBody = <LoadingIndicator resourceName="characters" />;
  } else if (data) {
    pageBody = Boolean(data.length) ? (
      <CharactersTable data={data} />
    ) : (
      "No characters found"
    );
  }

  return (
    <div className="characters-page">
      <h2 className="characters-page__title">Characters</h2>
      <Toolbar />
      <section className="characters-page__body">{pageBody}</section>
      <NavBar />
    </div>
  );
};

export default CharactersPage;
