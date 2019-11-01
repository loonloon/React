import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return storeResult(state, action);
    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);
    default:
      return state;
  }
};

const storeResult = (state, action) => {
  const updatedArray = state.results.concat({
    id: new Date(),
    value: action.result
  });
  return updateObject(state, {
    results: updatedArray
  });
};

const deleteResult = (state, action) => {
  const updatedArray = {
    results: state.results.filter(result => result.id !== action.resultId)
  };
  return updateObject(state, {
    results: updatedArray
  });
};

export default reducer;
