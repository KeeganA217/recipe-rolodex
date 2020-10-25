import React, { useState, useContext } from "react";
import RecipeContext from "../context/recipe/recipeContext";

const Search = () => {
  const recipeContext = useContext(RecipeContext);

  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    recipeContext.searchRecipes(text);
    console.log(text);
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
        <input type="submit" className="btn btn-dark btn-block mt-3" />
      </form>
    </div>
  );
};

export default Search;
