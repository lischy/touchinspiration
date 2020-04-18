import React from "react";
import { Route, IndexRoute, Switch } from "react-router";

//App Entry/Control
import App from "./modules/app/components/App";

//Users
import AllUsers from "./modules/users/components/AllUsers";
import ManageUsers from "./modules/users/components/ManageUsers";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={AllUsers} />
    <Route path="/users" component={AllUsers} />
    <Route path="/user/:slug" component={ManageUsers} />
    <Route path="/user" component={ManageUsers} />
  </Route>
);
