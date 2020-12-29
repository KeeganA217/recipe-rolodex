import React, { useState, useContext } from "react";
import RecipeContext from "../../context/recipe/recipeContext";

const Search = () => {
  const recipeContext = useContext(RecipeContext);

  const { recipes, clearRecipes, searchRecipes } = recipeContext;

  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    searchRecipes(text);
    setText("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 l10 offset-l1">
          <div className="input-field">
            <i className="material-icons prefix">search</i>
            <input
              id="icon-prefix search"
              type="search"
              value={text}
              onChange={onChange}
              required
              autoComplete="off"
            />
            <label className="" htmlFor="search">
              Search for a recipe here...
            </label>
            <i className="material-icons">close</i>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12 l8 offset-l2 search-row">
          {text !== "" && (
            <button className="btn" onClick={onSubmit}>
              Search
            </button>
          )}
        </div>
        <div className="col s12 l8 offset-l2">
          {recipes.length > 0 && (
            <button
              className="btn amber accent-2 black-text"
              onClick={clearRecipes}
            >
              Clear Recipes
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
