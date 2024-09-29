import React from "react";
import RecipeCard from "./RecipeCard";
import Recipedata from "./recipedata";

export default function RecipeContainer(){

    console.log(Recipedata)
    let newRecipeData = Recipedata.map((card)=>{
         
        return (
            
            <RecipeCard
            name = {card.name}
            url = {card.url}
            type = {card.type}
            time = {card.time}
            
            />
        )
    })

    return(
        <div className="recipesContainer">
        <div className="recipeSectionTitle">
          <h2 className="recipesSectionTitle-Span">Recipes</h2>
        </div>
        <div className="recipesSection">
          {newRecipeData}
        </div>
      </div>
    )
}