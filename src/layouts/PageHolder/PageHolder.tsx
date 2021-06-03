import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { CharactersPage } from "../../pages/CharactersPage";
import { HousePage } from "../../pages/HousePage";

import "./PageHolder.scss";

const PageHolder: React.FC = () => {
  return (
    <div className="page-holder">
      <Switch>
        <Route exact strict path="/" component={CharactersPage} />
        <Route exact strict path="/house/:houseId" component={HousePage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default PageHolder;
