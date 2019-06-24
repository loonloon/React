import {
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_FAIL,
  SET_POKEMONS,
  FILTER_POKEMONS
} from "./types";
import poke from "../api/poke";

export const getPokemons = () => async dispatch => {
  dispatch({ type: GET_POKEMONS_REQUEST });

  try {
    const response = await poke.get();

    if (response.error) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    dispatch({ type: GET_POKEMONS_SUCCESS });
    dispatch(setPokemons(response.data));
    // dispatch(filterPokemons());
    filterPokemons()(dispatch);
  } catch (error) {
    dispatch({ type: GET_POKEMONS_FAIL, payload: error.message });
  }
};

export const filterPokemons = (searchString = "") => dispatch => {
  dispatch({ type: FILTER_POKEMONS, payload: searchString });
};

const setPokemons = data => {
  return { type: SET_POKEMONS, payload: data.results };
};
