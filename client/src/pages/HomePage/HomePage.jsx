import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Favorites from "../../components/Favorites/Favorites";
import FamilyGroups from "../../components/FamilyGroups/FamilyGroups";
import RecipePin from "../../components/RecipePin/RecipePin";
import {mealList} from "./HomePage.module.sass"

const  HomePage = ({recipeList}) => {
    console.log(recipeList);

    return (
        <>
            <NavBar />
            <div>
            <Favorites/>
            <FamilyGroups/>
                <ul className="container">
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
                </ul>

                {/* <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard /> */}
            </div>
        </>
    );
}
 export default HomePage