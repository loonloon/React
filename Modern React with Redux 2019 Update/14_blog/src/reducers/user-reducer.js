export default (state = [], action) => {
    switch (action.type) {
        case "FETCH_USER":
            // return new array if expected redux realize the change
            return [...state, action.payload];
        default:
            return state;
    }
};