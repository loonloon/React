import { FETCH_ALBUMS_BY_GENRE, FETCH_ALBUMS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALBUMS_BY_GENRE:
      return action.payload;
    case FETCH_ALBUMS:
      return action.payload;
    default:
      return state;
  }
};
