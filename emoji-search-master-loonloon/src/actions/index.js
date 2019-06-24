import { GET_EMOJI, SEARCH_EMOJI } from "./types";
import emojiList from "../data/emoji-list.json";

export const getEmoji = () => dispatch => {
  dispatch({ type: GET_EMOJI, payload: emojiList });
  searchEmoji()(dispatch);
};

export const searchEmoji = (searchText = "") => async dispatch => {
  dispatch({ type: SEARCH_EMOJI, payload: searchText });
};
