import { useReducer, useRef } from "react";
import axios from "axios";

const initialState = {
  updating: false,
  updated: false,
  updateError: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "updating":
      return { ...initialState, updating: true };
    case "updated":
      return { ...initialState, updated: true };
    case "set-error":
      return { ...initialState, updateError: action.error };
    case "timed-out":
      return { ...initialState, timedOut: true };
    default:
      return state;
  }
};

const useUpdateUser = ({ timeOut = 30000 }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const timeOutRef = useRef(null);

  const updateUser = async (userId, params) => {
    try {
      dispatch({ type: "updating" });

      if (!userId) {
        throw new Error("userId is undefined");
      } else if (!params) {
        throw new Error("params is undefined");
      }

      if (timeOutRef.current) {
        clearTimeout(timeOutRef.current);
      }

      timeOutRef.current = setTimeout(
        () => dispatch({ type: "timed-out" }),
        timeOut
      );

      const url = `https://someapi.com/v1/account/${userId}/`;
      const response = await axios.put(url, params);
      clearTimeout(timeOutRef.current);

      const updatedUser = response.data;
      dispatch({ type: "updated" });

      return updatedUser;
    } catch (error) {
      clearTimeout(timeOutRef.current);
      dispatch({ type: "set-error", error });
    }
  };

  return { ...state, updateUser };
};

export default useUpdateUser;
