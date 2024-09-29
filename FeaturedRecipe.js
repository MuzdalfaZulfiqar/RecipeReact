import React from "react";


export default function FeaturedRecipe(){
    return (
    <div className="featuredRecipe">
        <div className="featuredRecipeSection">
          <div className="featuredLeft">
            <div className="featuresRecipesMainTitle">
              <h2>Featured Recipe</h2>
            </div>
            <div className="featuresRecipesMainPara">
              <div className="featuresRecipesMainParaHeading-Class">
                <span className="featuresRecipesMainParaHeading-Span"
                  >Boiled Egg Pastry</span>
              </div>
              <div className="featuresRecipesMainParaDetail-className">
                <p className="featuresRecipesMainParaDetail-PTag">
                  Indulge in our Pastry with Boiled Egg, a delightful
                  combination of flaky pastry and perfectly boiled eggs. Simple
                  yet satisfying, this dish makes for a delicious breakfast or
                  snack. Enjoy the blend of textures and flavors in every bite!
                </p>
              </div>
            </div>
            <div className="featuresRecipesMainButton-className">
              <button className="featuresRecipesMainButton">Try it</button>
            </div>
          </div>
          <div className="featuredRight">
            <img src="pexels-photo-566566.jpeg" alt="" />
          </div>
        </div>
    </div>
    )
}