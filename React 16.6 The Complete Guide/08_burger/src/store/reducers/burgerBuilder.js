import * as actionTypes from "../actions/actionTypes";

const IngredientPrice = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false
};

const addIngredient = (state, action) => {
  return {
    ...state,
    ingredients: {
      // Clone the ingredients object, else still point to the parent reference
      ...state.ingredients,
      [action.ingredientName]: state.ingredients[action.ingredientName] + 1
    },
    totalPrice: state.totalPrice + IngredientPrice[action.ingredientName],
    building: true
  };
};

const removeIngredient = (state, action) => {
  return {
    ...state,
    ingredients: {
      // Clone the ingredients object, else still point to the parent reference
      ...state.ingredients,
      [action.ingredientName]: state.ingredients[action.ingredientName] - 1
    },
    totalPrice: state.totalPrice - IngredientPrice[action.ingredientName],
    // Should check ingredients count
    building: false
  };
};

const setIngredients = (state, action) => {
  return {
    ...state,
    ingredients: {
      salad: action.ingredients.salad,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.cheese,
      meat: action.ingredients.meat
    },
    total: 4,
    error: false,
    building: false
  };
};

const fetchIngredients = (state, action) => {
  return {
    ...state,
    error: true
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENTS:
      return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENTS:
      return removeIngredient(state, action);
    case actionTypes.SET_INGREDIENTS:
      return setIngredients(state, action);
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return fetchIngredients(state, action);
    default:
      return state;
  }
};

export default reducer;
