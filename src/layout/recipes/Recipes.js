import React, { useContext } from "react";
import Spinner from "../Spinner";
import RecipeContext from "../../context/recipe/recipeContext";

const recipes = () => {
  const recipeContext = useContext(RecipeContext);

  const { recipes, loading } = recipeContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        {recipes.map((recipe) => (
          <h3>{recipes.name}</h3>
          // <RecipeItem key={recipe.id} user={recipe} />
        ))}
      </div>
    );
  }
};

export default recipes;
