import jsonPlaceholder from "../apis/json-placeholder";
import _ from "lodash";

// action creator call another action creator
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // manually dispatching action creator or calling the action creator
    await dispatch(fetchPosts());

    _.chain(getState().posts)
        .map("userId")
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();

    // const userIds = _.uniq(_.map(getState().posts, "userId"));
    // userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (userId) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${userId}`);
    dispatch({ type: "FETCH_USER", payload: response.data });
};

// memoize version
// export const fetchUser = (userId) => dispatch => _fetchUser(userId, dispatch);

// const _fetchUser = _.memoize(async (userId, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${userId}`);
//     dispatch({ type: "FETCH_USER", payload: response.data });
// });
