import React from "react";
import RecipeContext from "../../context/recipe/recipeContext";

const RecipeItem = () => {
  const recipeContext = useContext(RecipeContext);
  const { recipes } = recipeContext;

  return <div>
      <h3>{recipes.}</h3>
  </div>;
};

export default RecipeItem;
