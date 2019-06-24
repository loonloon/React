import { combineReducers } from "redux";
import bitcoinReducer from "./bitcoin-reducer";
import currencyReducer from "./currency-reducer";

export default combineReducers({
  bitcoinData: bitcoinReducer,
  currency: currencyReducer
});
