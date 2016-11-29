import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import createLogger from "redux-logger";

import rootReducer from "../reducer";

// const logger = createLogger();
const middlewares = [
  thunk,
  // logger,
  require("redux-immutable-state-invariant")()
];

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares));

  if (module.hot) {
    module.hot.accept("../reducer", () => {
      const nextReducer = require("../reducer").default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
