import React from "react";

export default function RecipeCard(props) {
    console.log(props)
  return (
    <div className="recipeCard">
      <div className="top">
        <img src={props.url} alt="" />
      </div>
      <div className="bottom">
        <div className="title_Bottom">
          <p className="title_P">{props.name}</p>
        </div>
        <div className="type">
          <span className="type_P">{props.type}</span>
        </div>
        <div className="Times_ratings">
          <div className="cookTime">
            <div className="clockImage">
              <img src="clock.webp" alt="" />
            </div>
            <div className="clockStat">
              <span className="clockStatSpan">{props.time}</span>
            </div>
          </div>
          <div className="cardRecipeButtonDiv">
            <button className="cardRecipeButton">View Recipe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
