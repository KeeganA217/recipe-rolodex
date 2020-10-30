import React from "react";
import { v4 as uuid } from "uuid";

const RecipeItem = ({ title, calories, image, ingredients, link, risks }) => {
  return (
    <div className="recipe-card">
      <div className="upper">
        <div className="image">
          <img src={image} alt="Loading..." className="image" />
        </div>
        <div className="info">
          {" "}
          <h4>{title}</h4>
          <p>
            <span>{calories}</span> Total Calories
          </p>
          {risks.map((risk) => (
            <ul key={uuid()}>
              <li>{risk}</li>
            </ul>
          ))}
        </div>
      </div>
      <div className="lower">
        <p>Ingredients</p>
        {ingredients.map((ingredient) => (
          <ul key={uuid()}>
            <li>{ingredient}</li>
          </ul>
        ))}
      </div>
      <button>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Explore Full Recipe
        </a>
      </button>
    </div>
  );
};

export default RecipeItem;
