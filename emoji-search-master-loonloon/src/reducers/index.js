import { combineReducers } from "redux";
import emojiReducer from "./emoji-reducer";

export default combineReducers({
  emojiResults: emojiReducer
});
