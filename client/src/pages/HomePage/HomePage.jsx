import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Favorites from "../../components/Sliders/User/Favorites/Favorites";

import Area from "../../components/Sliders/Area/Area";

import Category from "../../components/Sliders/Category/Category";

import Ingredients from "../../components/Sliders/Ingredients/Ingredients";

import Tags from "../../components/Sliders/Tags/Tags";

import FamilyGroups from "../../components/Sliders/User/FamilyGroups/FamilyGroups";

// ToDo
// create useEffect fn to get random recipes by passes state obj array
// create state obj for each Set of random recipes
// pass state obj to specific slider component


const  HomePage = ({recipeList}) => {
// console.log(recipeList);
   
    return (
        <> 
            <NavBar />
            <div>
            <Favorites title = "Favorites" recipeList = {recipeList}/>
            <FamilyGroups title = "Family Group" recipeList = {recipeList}/>
            <Area title = "Area" recipeList = {recipeList}/>
            <Category title = "Category" recipeList = {recipeList}/>
            <Ingredients title = "Ingredients" recipeList = {recipeList}/>
            <Tags title = "Tags" recipeList = {recipeList}/>
           
                {/* <ul className="container">
                    {recipeList &&
                        recipeList.map(( recipe, i) => (
                            <li className= {mealList} key={`recipeList-${i}`}>
                                <RecipePin
                                    id = {recipe._id}
                                    meal={recipe.meal}
                                    description={recipe.category}
                                    image={recipe.image}
                                />
                            </li>
                        ))}
                </ul> */}
            </div>
        </>
    );
}
 export default HomePage