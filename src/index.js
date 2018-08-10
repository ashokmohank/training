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
Store : 
{
  items: [
    {id:1 , text : "todo-1", isComplete : true},
    {id:2 , text : "todo-2", isComplete : true},
    {id:3 , text : "todo-3", isComplete : true},
    
  ],
  filter : "ALL"
}

Actions:
{type: "ADD_TODO" , task: "Learn Go"}
{type:"TOGGLE_TODO", id: 1}

{type:"FILTER" ,  filter: "ALL"}
{type:"FILTER" ,  filter: "ACTIVE"}
{type:"FILTER" ,  filter: "COMPLETE"}
*/
