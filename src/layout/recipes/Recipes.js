import React, { useContext } from "react";
import RecipeContext from "../../context/recipe/recipeContext";
import RecipeItem from "./RecipeItem";
import Spinner from "../Spinner";
import { v4 as uuid } from "uuid";

const Recipes = () => {
  const recipeContext = useContext(RecipeContext);

  const { recipes, loading } = recipeContext;

  if (loading) {
    return <Spinner />;
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
};

export default Recipes;
