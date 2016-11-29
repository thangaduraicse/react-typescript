import * as React from "react";
import {render} from "react-dom";
import {browserHistory} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";

const {AppContainer} = require("react-hot-loader");

import Root from "./main/Root";
import configureStore from "./main/store";

require("bootstrap");
require("bootstrap-css");
require("./main/css/index.css");

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
const rootElement = document.getElementById("root");

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  rootElement
);

if(module.hot) {
  console.log("module.hot");
  const orgError = console.error;
  console.error = message => {
    if(message &&
        message.indexOf("You cannot change <Router routes>;") === "-1") {
      orgError.apply(console, [message]);
    }
  };
  module.hot.accept("./main/Root", () => {
    const NextApp = require("./main/Root").default;
    render(
      <AppContainer>
        <NextApp store={store} history={history} />
      </AppContainer>,
      rootElement
    );
  });
}
