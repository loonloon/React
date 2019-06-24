import { GET_DATA, SET_CURRENCY } from "./types";
import getBitcoin from "../api/get-bitcoin";

export const getData = currency => async dispatch => {
  const response = await getBitcoin.get(
    `v1/bpi/historical/close.json?currency=${currency}`
  );
  dispatch({ type: GET_DATA, payload: response.data.bpi });
};

export const setCurrency = currency => async dispatch => {
  dispatch(getData(currency));
  dispatch({ type: SET_CURRENCY, payload: currency });
};
