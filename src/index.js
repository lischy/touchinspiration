import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import store, { history } from "./store/configureStore";
import { Provider } from "react-redux";
import { Router } from "react-router";
import routes from "./routes";
import injectTapEventPlugin from "react-tap-event-plugin";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./styles/app.css";

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById("root"),
  injectTapEventPlugin()
);
