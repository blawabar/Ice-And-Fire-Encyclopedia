import React from "react";
import { Switch, Route } from "react-router-dom";

import "./PageHolder.scss";

const PageHolder: React.FC = () => {
  return (
    <div className="page-holder">
      <Switch>
        <Route exact strict path="/" render={() => <h1>Characters Page</h1>} />
        <Route
          exact
          strict
          path="/house"
          render={() => <h1>House Details Page</h1>}
        />
      </Switch>
    </div>
  );
};

export default PageHolder;
