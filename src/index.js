import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import combineReducers from "./reducers/combinedReducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
//import logger from 'redux-logger';
import loggingMW from "./middlewares/loggingMW";

//calling middleware
//const appStore = createStore(combineReducers, applyMiddleware(loggingMW));

//composeWithDevTools for dev purpose to inspect state
const appStore = createStore(
  combineReducers,
  composeWithDevTools(applyMiddleware(thunk, loggingMW))
);

const spmDiv = document.getElementById("app");

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  spmDiv
);

/*
Store : {
  isFetching : false,
  userDetails : {},
  error : ""
}

Actions:
{type: "FETCH_USER_DETAILS" ,url: ""}

{type:"IS_FETCHING"}

{type:"FETCH_SUCCESS", userDetails:{}}

{type:"FETCH_ERROR", error:""}
*/
