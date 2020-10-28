import { SEARCH_RECIPES, SET_LOADING, CLEAR_RECIPES } from "../Types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_RECIPES:
      return {
        ...state,
        recipes: [],
        loading: false,
      };
    default:
      return state;
  }
};
