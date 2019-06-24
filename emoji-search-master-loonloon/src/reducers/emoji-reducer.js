import { GET_EMOJI, SEARCH_EMOJI } from "../actions/types";

const initialState = {
  emojis: [],
  displayedEmojis: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EMOJI:
      return { ...state, emojis: action.payload };
    case SEARCH_EMOJI:
      const searchText = action.payload;
      const result = state.emojis
        .filter(emoji => {
          if (
            emoji.title.toLowerCase().includes(searchText.toLowerCase()) ||
            emoji.keywords.includes(searchText)
          ) {
            return true;
          }

          return false;
        })
        .slice(0, 20);
      return { ...state, displayedEmojis: result };
    default:
      return state;
  }
};
