import React, { useState, useContext } from "react";
import RecipeContext from "../context/recipe/recipeContext";

const Search = () => {
  const recipeContext = useContext(RecipeContext);

  const { recipes, clearRecipes } = recipeContext;

  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    recipeContext.searchRecipes(text);
    setText("");
  };

  return (
    <div>
      <form action="" className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          value={text}
          placeholder="Find A Recipe..."
          className="search mx-auto form-control"
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search Recipes"
          className="btn btn-block mt-3 submit"
        />
      </form>
      {recipes.length > 0 && (
        <button
          className="btn btn-block clear mb-5 mt-3"
          onClick={clearRecipes}
        >
          Clear Recipes
        </button>
      )}
    </div>
  );
};

export default Search;
