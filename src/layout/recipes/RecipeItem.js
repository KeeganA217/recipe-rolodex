import React from "react";
import { v4 as uuid } from "uuid";

const RecipeItem = ({ title, calories, image, ingredients, link, risks }) => {
  return (
    <div className="col s12 l4">
      <div className="card hoverable medium">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={image} alt="Loading..."></img>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {title}
            <i className="material-icons valign-wrapper right">more_vert</i>
          </span>

          <div className="card-action">
            <p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn waves-effect waves-light"
              >
                Explore Full Recipe
              </a>
            </p>
          </div>
        </div>
        <div className="card-reveal">
          <span className="card-title center grey-text text-darken-4">
            {title}
            <i className="material-icons right">close</i>
          </span>
          <h6 className="center red-text">
            <span>{calories}</span> Total Calories
          </h6>
          <h5 className="center teal lighten-2">Risks</h5>
          {risks.map((risk) => (
            <ul key={uuid()}>
              <li>{risk}</li>
            </ul>
          ))}
          <h5 className="center teal lighten-2">Ingredients</h5>
          {ingredients.map((ingredient) => (
            <ul key={uuid()}>
              <li>{ingredient}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
