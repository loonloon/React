import musicStore from "../api/music-store";
import {
  FETCH_GENRES,
  FETCH_ALBUMS_BY_GENRE,
  FETCH_ALBUMS,
  FETCH_LOG_IN,
  LOG_IN,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  CREATE_CART_ITEM,
  DELETE_CART_ITEM,
  CHECKOUT_CART_SUCCESS,
  CHECKOUT_CART_FAILURE
} from "./types";
import history from "../history";

export const fetchGenres = () => async dispatch => {
  const response = await musicStore.get("/genres");
  dispatch({ type: FETCH_GENRES, payload: response.data });
};

export const fetchAlbumsByGenre = genreId => async dispatch => {
  const response = await musicStore.get("/albums", {
    params: { GenreId: genreId }
  });
  dispatch({ type: FETCH_ALBUMS_BY_GENRE, payload: response.data });
};

export const fetchAlbums = () => async dispatch => {
  const response = await musicStore.get("/albums");
  dispatch({ type: FETCH_ALBUMS, payload: response.data });
};

export const fetchLogIn = () => dispatch => {
  dispatch({ type: FETCH_LOG_IN });
};

export const logIn = (userName, password) => async dispatch => {
  dispatch({ type: LOG_IN });

  try {
    const response = await musicStore.get("/users", {
      params: { UserName: userName, Password: password }
    });

    if (response.data.length === 0) {
      dispatch({ type: LOG_IN_FAILURE, payload: "" });
    } else {
      dispatch({ type: LOG_IN_SUCCESS, payload: userName });
    }
  } catch (error) {
    dispatch({ type: LOG_IN_FAILURE, payload: error.toString() });
  }
};

export const createUser = ({
  userName,
  emailAddress,
  password
}) => async dispatch => {
  dispatch({ type: CREATE_USER });

  try {
    const response = await musicStore.post("/users", {
      UserName: userName,
      EmailAddress: emailAddress,
      Password: password
    });

    dispatch({ type: CREATE_USER_SUCCESS, payload: response.data.user });
    history.push("/");
  } catch (error) {
    dispatch({ type: CREATE_USER_FAILURE, payload: error.toString() });
  }
};

export const addToCart = album => async dispatch => {
  dispatch({ type: CREATE_CART_ITEM, payload: album });
  history.push("/cart");
};

export const removeFromCart = album => async dispatch => {
  dispatch({ type: DELETE_CART_ITEM, payload: album });
};

export const checkoutCart = order => async dispatch => {
  try {
    const response = await musicStore.post("/orders", {
      OrderDate: order.orderDate,
      UserName: order.userName,
      FirstName: order.firstName,
      LastName: order.lastName,
      Address: order.lastName,
      City: order.city,
      State: order.state,
      PostalCode: order.postalCode,
      Country: order.country,
      Phone: order.phone,
      EmailAddress: order.emailAddress,
      TotalAmount: order.totalAmount,
      OrderDetails: order.cart
    });

    if (response.status === 201) {
      dispatch({ type: CHECKOUT_CART_SUCCESS, payload: "" });
      history.push(`/checkOutComplete/${response.data.id}`);
    } else {
      dispatch({ type: CHECKOUT_CART_FAILURE, payload: "Not Created" });
    }
  } catch (error) {
    dispatch({ type: CHECKOUT_CART_FAILURE, payload: error.toString() });
  }
};
