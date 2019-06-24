import { combineReducers } from "redux";
import postsReducer from "./posts-reducer";
import userReducer from "./user-reducer";

export default combineReducers({
    posts: postsReducer,
    users: userReducer
});