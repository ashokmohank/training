import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import combineReducers from "./reducers/combinedReducers";

import { composeWithDevTools } from "redux-devtools-extension";
import loggingMW from "./middlewares/loggingMW";
const spmDiv = document.getElementById("app");
//calling middleware
//const appStore = createStore(combineReducers, applyMiddleware(loggingMW));
//composeWithDevTools for dev purpose to inspect state
const appStore = createStore(
  combineReducers,
  composeWithDevTools(applyMiddleware(loggingMW))
);

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  spmDiv
);
