import React from "react";
import { Route, Switch } from "react-router-dom";

import Employee from "./Employee";

const Pages = ({ match }) => (
  <Switch>
    <Route path={`${match.url}/employee`} component={Employee} />
  </Switch>
);

export default Pages;
