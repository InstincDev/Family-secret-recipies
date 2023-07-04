import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Favorites from "../../components/Sliders/User/Favorites/Favorites";

import Area from "../../components/Sliders/Area/Area";

import Category from "../../components/Sliders/Category/Category";

import Ingredients from "../../components/Sliders/Ingredients/Ingredients";

import Tags from "../../components/Sliders/Tags/Tags";

import FamilyGroups from "../../components/Sliders/User/FamilyGroups/FamilyGroups";
import { fetchRecipeSlides } from "../../utils/serverRequests.js";

const HomePage = ({ sliderTypes, recipeList }) => {
    const [areaTypes, setAreaTypes] = useState([]);
    const [categoryTypes, setCategoryTypes] = useState([]);
    const [ingredientTypes, setIngredientTypes] = useState([]);
    const [tagTypes, setTagTypes] = useState([]);

    useEffect(() => {
        const setRecipeState = async (sliderTypes) => {
            try {
                for (const group of sliderTypes) {
                    switch (Object.keys(group)[0]) {
                        case "area":
                            setAreaTypes(group);
                            break;
                        case "category":
                            setCategoryTypes(group);
                            break;
                        case "ingredient":
                            setIngredientTypes(group);
                            break;
                        case "tag":
                            setTagTypes(group);
                            break;
                    }
                }

               /*
               ToDo - 
               Move this to Slider Components  
               const response = await fetchRecipeSlides("area", "American");
                // console.log(response);

                // const randomRecipes = getRandomTypes(response.data, 10);

                //    console.log(randomRecipes); 
                
                */

            } catch (error) {
                console.log(error.message);
            }
        };
        setRecipeState(sliderTypes);
    }, []);

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
                <Favorites title="Favorites" recipeList={recipeList} />
                <FamilyGroups title="Family Group" recipeList={recipeList} />
                <Area
                    title="Area"
                    recipeList={recipeList}
                    slideList={areaTypes}
                />
                <Category
                    title="Category"
                    recipeList={recipeList}
                    slideList={categoryTypes}
                />
                <Ingredients
                    title="Ingredients"
                    recipeList={recipeList}
                    slideList={ingredientTypes}
                />
                <Tags
                    title="Tags"
                    recipeList={recipeList}
                    slideList={tagTypes}
                />

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
};
export default HomePage;
