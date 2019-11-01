import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      // mutating old state
      // const newState = state;
      // newState.counter = state.counter + 1;
      // return newState;

      // copy from old state and overwrite counter
      return updateObject(state, { counter: state.counter + 1 });
    case actionTypes.DECREMENT:
      return updateObject(state, { counter: state.counter - 1 });
    case actionTypes.ADD:
      return updateObject(state, { counter: state.counter + 5 });
    case actionTypes.SUBTRACT:
      return updateObject(state, { counter: state.counter - 5 });
    default:
      return state;
  }
};

export default reducer;
