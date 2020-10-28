import React from "react";
import Search from "../layout/Search";
import Recipes from "../layout/recipes/Recipes";

const Home = () => {
  return (
    <div className="main-container">
      <Search />
      <Recipes />
    </div>
  );
};

export default Home;
