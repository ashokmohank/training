import { combineReducers } from "redux";
import addToDoReducer from "./addToDoReducer";
import filterReducer from "./filterReducer";

export default combineReducers({
  items: addToDoReducer,
  filter: filterReducer
});
