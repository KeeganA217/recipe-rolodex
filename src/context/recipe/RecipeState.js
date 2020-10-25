import React, { useReducer } from "react";
import RecipeReducer from "./recipeReducer";
import RecipeContext from "./recipeContext";
import axios from "axios";
import { SEARCH_RECIPES, SET_LOADING } from "../Types";

const RecipeState = (props) => {
  const initialState = {
    recipes: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(RecipeReducer, initialState);

  const searchRecipes = async (text) => {
    setLoading();

    const res = await axios.get(
      `https://api.edamam.com/search?app_id=${process.env.REACT_APP_RECIPE_APP_ID}&app_key=${process.env.REACT_APP_RECIPE_API_KEY}&q=${text}`
    );
    console.log(res.data);
    dispatch({
      type: SEARCH_RECIPES,
      payload: res.data,
    });
  };

  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  return (
    <RecipeContext.Provider
      value={{
        recipes: state.recipes,
        loading: state.loading,
        setLoading,
        searchRecipes,
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeState;
