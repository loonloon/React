import { CREATE_USER, CREATE_USER_SUCCESS, CREATE_USER_FAILURE } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_USER:
      return { registered: false, creating: true };
    case CREATE_USER_SUCCESS:
      return { registered: true, creating: false };
    case CREATE_USER_FAILURE:
      return { registered: false, creating: false };
    default:
      return state;
  }
};
