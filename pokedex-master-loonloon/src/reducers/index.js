import { combineReducers } from "redux";
import pageReducer from "./page-reducer";

export default combineReducers({
  page: pageReducer
});
