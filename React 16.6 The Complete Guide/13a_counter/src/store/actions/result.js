import { STORE_RESULT, DELETE_RESULT } from "./actionTypes";

const saveResult = result => {
  return {
    type: STORE_RESULT,
    result: result
  };
};

export const storeResult = result => {
  return (dispatch, getState) => {
    setTimeout(() => {
      const oldCounter = getState();
      console.log("[getState]", oldCounter);

      dispatch(saveResult(result));
    }, 2000);
  };
};

export const deleteResult = id => {
  return {
    type: DELETE_RESULT,
    resultId: id
  };
};
