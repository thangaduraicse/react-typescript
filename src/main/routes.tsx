import * as React from "react";
import {Route, IndexRoute, Redirect} from "react-router";

import App from './App';

// Include all app widgets here
import ZipcodeWidget from "../widgets/zipsearch";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ZipcodeWidget} />
    <Redirect from="*" to="/" />
  </Route>
);
