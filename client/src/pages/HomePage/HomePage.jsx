import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Favorites from "../../components/Sliders/User/Favorites/Favorites";

import Area from "../../components/Sliders/Area/Area";

import Category from "../../components/Sliders/Category/Category";

import Ingredients from "../../components/Sliders/Ingredients/Ingredients";

import Tags from "../../components/Sliders/Tags/Tags";

import FamilyGroups from "../../components/Sliders/User/FamilyGroups/FamilyGroups";
import { fetchRecipeSlides } from "../../utils/serverRequests.js";
// ToDo
// create useEffect fn to get random recipes by passes state obj array
// create state obj for each Set of random recipes
// pass state obj to specific slider component


const  HomePage = ({sliderTypes, recipeList}) => {
     const [areaTypes, setAreaTypes] = useState([]);
    // const [categoryTypes, setCategoryTypes] = useState({});
   
   
    useEffect(()=>{
    const getRecipes = async (sliderTypes) => {
        try {
            const response = await fetchRecipeSlides("area", "American");
            console.log(response);
        console.log(response.data["area"]);
            for(const i of sliderTypes){
                
            }

            // const randomRecipes = getRandomTypes(response.data, 10);

           console.log(randomRecipes);
        } catch (error) {
            console.log(error.message);
        }
    };
    getRecipes(sliderTypes)
   },[])
   
   
   
   function getRandomTypes(typeArray, count) {
    const randomIndices = numberSet(count, typeArray.length);
    const randomTypes = [];

    for (const index of randomIndices) {
        randomTypes.push(typeArray[index]);
    }

    return randomTypes;
}

function numberSet(desired, max) {
    // condition makes sure while loop isn't sticky
    if (max < desired) {
        desired = max;
    }

    const set = new Set();

    while (set.size < desired) {
        set.add(Math.floor(Math.random() * max));
    }

    return [...set];
}


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