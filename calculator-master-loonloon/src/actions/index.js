import { CALCULATE } from "../actions/types";

export const calculate = buttonName => {
  console.log(buttonName);
  return {
    type: CALCULATE,
    payload: buttonName
  };
};
