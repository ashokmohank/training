import userDetailsReducer from "./userDetailsReducer";
import { combineReducers } from "redux";

export default combineReducers({
  gitapi: userDetailsReducer
});
