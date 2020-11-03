import React, { useContext } from "react";
import RecipeContext from "../../context/recipe/recipeContext";
import RecipeItem from "./RecipeItem";
import Spinner from "../components/Spinner";
import { v4 as uuid } from "uuid";

const Recipes = () => {
  const recipeContext = useContext(RecipeContext);

  const { recipes, loading } = recipeContext;

  if (loading) {
    return <Spinner />;
  } else {
    if (recipes.length === 0) {
      return (
        <div className="alternate">
          <i className="fas fa-glasses"></i>
          <h3>Please search for an ingredient or recipe to get started...</h3>
        </div>
      );
    } else {
      return (
        <div className="items">
          {recipes.map((recipe) => (
            <RecipeItem
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              calories={Math.floor(recipe.recipe.calories)}
              ingredients={recipe.recipe.ingredientLines}
              link={recipe.recipe.url}
              risks={recipe.recipe.healthLabels}
              key={uuid()}
            />
          ))}
        </div>
      );
    }
  }
};

export default Recipes;
