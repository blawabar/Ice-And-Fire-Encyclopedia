import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { HOUSE_URL, ROOT_URL } from "../../data/constants";
import { CharactersPage } from "../../pages/CharactersPage";
import { HousePage } from "../../pages/HousePage";

import "./PageHolder.scss";

const PageHolder: React.FC = () => {
  return (
    <div className="page-holder">
      <Switch>
        <Route exact strict path={ROOT_URL} component={CharactersPage} />
        <Route
          exact
          strict
          path={`${HOUSE_URL}/:houseId`}
          component={HousePage}
        />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default PageHolder;
