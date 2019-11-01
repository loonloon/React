import { INCREMENT, DECREMENT, ADD, SUBTRACT } from "./actionTypes";

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const add = () => {
  return {
    type: ADD
  };
};

export const subtract = () => {
  return {
    type: SUBTRACT
  };
};
