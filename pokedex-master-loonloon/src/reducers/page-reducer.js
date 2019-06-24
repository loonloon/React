import {
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_FAIL,
  SET_POKEMONS,
  FILTER_POKEMONS
} from "../actions/types";

const initialState = {
  isFetched: false,
  error: null,
  pokemons: [],
  displayedPokemons: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS_REQUEST:
      return { ...state, isFetched: true };
    case GET_POKEMONS_SUCCESS:
      return { ...state, isFetched: false };
    case GET_POKEMONS_FAIL:
      return { ...state, isFetched: false, error: action.payload };
    case SET_POKEMONS:
      const pokemons = action.payload.map(pokemon => {
        let { url } = pokemon;
        pokemon.id = url.substring(34, url.length - 1);
        pokemon.name =
          pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        return pokemon;
      });
      return { ...state, pokemons };
    case FILTER_POKEMONS:
      const displayedPokemons = state.pokemons.filter(pokemon => {
        return pokemon.name
          .toLowerCase()
          .includes(action.payload.toLowerCase());
      });
      return { ...state, displayedPokemons };
    default:
      return state;
  }
}
