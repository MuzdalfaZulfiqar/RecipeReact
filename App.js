import React from "react"
import Header from "./Header"
import RecipeContainer from "./RecipeContainer"
import FeaturedRecipe from "./FeaturedRecipe"
import Testimonails from "./Testimonails"
import Footer from "./Footer"

export default function App() {
    return(
        <div className="container">
            <Header/>
            <RecipeContainer/>
            <FeaturedRecipe/>
            <Testimonails/>
            <Footer/>
        </div>
    )
}
