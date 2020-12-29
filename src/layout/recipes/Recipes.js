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
        <div className="row">
          <div className="col s12 l8 offset-l2 ">
            <div className="card z-depth-2 grey lighten-5 opening-card">
              <div className="card-content black-text">
                <span className="card-title center-align">
                  <h4>Welcome to The Recipe Rolodex!</h4>
                </span>
                <h5 className="center">
                  Please search for an ingredient or recipe to get started...
                </h5>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="row items">
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
        </div>
      );
    }
  }
};

export default Recipes;
