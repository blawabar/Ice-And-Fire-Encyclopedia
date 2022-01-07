import React from "react";
import { CharactersTable } from "../../components/CharactersTable";
import { ErrorInfo } from "../../components/ErrorInfo";
import { LoadingIndicator } from "../../components/LoadingIndicator";
import { NavBar } from "../../components/NavBar";
import { Toolbar } from "../../components/Toolbar";
import { useCharactersFetcher } from "../../hooks";

import "./CharactersPage.scss";

const CharactersPage: React.FC = () => {
  const { data, isLoading, error } = useCharactersFetcher();

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
