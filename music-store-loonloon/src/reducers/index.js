import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import genreReducer from "./genre-reducer";
import albumReducer from "./album-reducer";
import userReducer from "./user-reducer";
import authenticationReducer from "./authentication-reducer";
import cartReducer from "./cart-reducer";

export default combineReducers({
  form: formReducer,
  genres: genreReducer,
  albums: albumReducer,
  user: userReducer,
  authentication: authenticationReducer,
  cart: cartReducer
});
