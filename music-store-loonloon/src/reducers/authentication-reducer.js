import {
  FETCH_LOG_IN,
  LOG_IN,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT
} from "../actions/types";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { loggedIn: true, logging: false, user }
  : { loggedIn: false, logging: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOG_IN:
      return state;
    case LOG_IN:
      return { loggedIn: false, logging: true, user: {} };
    case LOG_IN_SUCCESS:
      //localStorage.setItem("user", JSON.stringify(action.payload));
      return { loggedIn: true, user: action.payload };
    case LOG_IN_FAILURE:
      return { loggedIn: false, logging: false, user: {} };
    case LOG_OUT:
      //localStorage.removeItem('user');
      return { loggedIn: false, logging: false, user: {} };
    default:
      return state;
  }
};
