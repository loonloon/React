import { CALCULATE } from "../actions/types";
import Big from "big.js";

const INITIAL_STATE = {
  total: null,
  next: null,
  operation: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CALCULATE:
      return calculate(state, action.payload);
    default:
      return state;
  }
};

function calculate(obj, buttonName) {
  if (buttonName === "AC") {
    return INITIAL_STATE;
  }

  if (isNumber(buttonName)) {
    if (buttonName === "0" && obj.next === "0") {
      return {};
    }

    // If there is an operation, update next
    if (obj.operation) {
      if (obj.next) {
        return { ...obj, next: obj.next + buttonName };
      }

      return { ...obj, next: buttonName };
    }

    // If there is no operation, update next and clear the value
    if (obj.next) {
      return { ...obj, total: null, next: obj.next + buttonName };
    }

    return { ...obj, total: null, next: buttonName };
  }

  if (buttonName === "%") {
    if (obj.operation && obj.next) {
      const result = operate(obj.total, obj.next, obj.operation);
      return {
        total: Big(result)
          .div(Big("100"))
          .toString(),
        next: null,
        operation: null
      };
    }

    if (obj.next) {
      return {
        ...obj,
        next: Big(obj.next)
          .div(Big("100"))
          .toString()
      };
    }

    return {};
  }

  if (buttonName === ".") {
    if (obj.next) {
      // ignore a . if the next number already has one
      if (obj.next.includes(".")) {
        return {};
      }

      return { ...obj, next: obj.next + "." };
    }

    return { ...obj, next: "0." };
  }

  if (buttonName === "=") {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null
      };
    } else {
      // '=' with no operation, nothing to do
      return {};
    }
  }

  if (buttonName === "+/-") {
    if (obj.next) {
      return { ...obj, next: (-1 * parseFloat(obj.next)).toString() };
    }

    if (obj.total) {
      return { ...obj, total: (-1 * parseFloat(obj.total)).toString() };
    }

    return {};
  }

  // Button must be an operation

  // When the user presses an operation button without having entered
  // a number first, do nothing.
  // if (!obj.next && !obj.total) {
  //   return {};
  // }

  // User pressed an operation button and there is an existing operation
  if (obj.operation) {
    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName
    };
  }

  // no operation yet, but the user typed one

  // The user hasn't typed a number yet, just save the operation
  if (!obj.next) {
    return { ...obj, operation: buttonName };
  }

  // save the operation and shift 'next' into 'total'
  return { total: obj.next, next: null, operation: buttonName };
}

function isNumber(item) {
  return /[0-9]+/.test(item);
}

function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne || "0");
  const two = Big(numberTwo || "0");

  if (operation === "+") {
    return one.plus(two).toString();
  }

  if (operation === "-") {
    return one.minus(two).toString();
  }

  if (operation === "x") {
    return one.times(two).toString();
  }

  if (operation === "÷") {
    if (two === "0") {
      return "0";
    } else {
      return one.div(two).toString();
    }
  }

  throw Error(`Unknown operation '${operation}'`);
}
