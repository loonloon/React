import { combineReducers } from "redux";
import calculatorReducer from "./calculator-reducer";

export default combineReducers({ calculator: calculatorReducer });
