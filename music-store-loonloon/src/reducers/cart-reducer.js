import {
  FETCH_CART,
  CREATE_CART_ITEM,
  DELETE_CART_ITEM,
  CHECKOUT_CART_SUCCESS,
  CHECKOUT_CART_FAILURE
} from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_CART:
      return action.payload;
    case CREATE_CART_ITEM:
      if (state.length > 0) {
        const foundAlbumIndex = state.findIndex(
          album => album.AlbumId === action.payload.AlbumId
        );

        if (foundAlbumIndex !== -1) {
          return state.map(album => {
            if (album.AlbumId === action.payload.AlbumId) {
              album.Quantity += 1;
            }
            return album;
          });
        }
      }

      return [...state, { Quantity: 1, ...action.payload }];
    case DELETE_CART_ITEM:
      return state.filter(album => album.AlbumId !== action.payload.AlbumId);
    case CHECKOUT_CART_SUCCESS:
      return [];
    case CHECKOUT_CART_FAILURE:
      return state;
    default:
      return state;
  }
};
