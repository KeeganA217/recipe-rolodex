import { SEARCH_RECIPES, SET_LOADING } from "../Types";

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
    default:
      return state;
  }
};
