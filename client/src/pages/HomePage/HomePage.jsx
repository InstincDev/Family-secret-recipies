import { useContext, useEffect, useState } from "react";
import { fetchRecipes } from "../../utils/serverRequests.js";
import { RecipeAPIContext } from "../../utils/RecipeAPIContext.jsx";
import useLocalStorage from "../../utils/useLocalStorage.jsx";
import NavBar from "../../components/NavBar/NavBar";
import Favorites from "../../components/Sliders/User/Favorites/Favorites";
import FamilyGroups from "../../components/Sliders/User/FamilyGroups/FamilyGroups";
import RecipeSlide from "../../components/Sliders/RecipeSlide";





const HomePage = () => {
    const { recipeData, setRecipeData } = useContext(RecipeAPIContext);
    // const [sliderTypes, setSliderTypes] = useState([]);
    const [areaTypes, setAreaTypes] = useLocalStorage("areaTypes",[]);
    const [categoryTypes, setCategoryTypes] = useLocalStorage("categoryTypes",[]);
    const [ingredientTypes, setIngredientTypes] = useLocalStorage("ingredientTypes",[]);
    const [tagTypes, setTagTypes] = useLocalStorage("tagTypes",[]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getSliderTypes();
    }, []);

    const getSliderTypes = async () => {
        try {
            const recipes = await fetchRecipes();
            const data = recipes.data;
            setRecipeData(data);

            const areaSet = new Set();
            const categorySet = new Set();
            const ingredientSet = new Set();
            const tagSet = new Set();

            for (const recipe of data) {
                if (recipe.area != null) {
                    areaSet.add(recipe.area);
                }
                if (recipe.ingredient != null) {
                    for (const ingre of recipe.ingredient) {
                        ingredientSet.add(ingre.ingredient);
                    }
                }
                if (recipe.category != null) {
                    categorySet.add(recipe.category);
                }
                if (recipe.tag != null) {
                    recipe.tag.forEach((tag) => tagSet.add(tag));
                }
            }

            if(areaTypes.length === 0){
              setAreaTypes(getRandomTypes([...areaSet].sort(), 2));  
            }
            if(categoryTypes.length === 0){setCategoryTypes(getRandomTypes([...categorySet].sort(), 2));}
            if(ingredientTypes.length === 0){setIngredientTypes(getRandomTypes([...ingredientSet].sort(), 3));}
            if(tagTypes.length === 0){setTagTypes(getRandomTypes([...tagSet].sort(), 2));}
            // const newTypesObj = {
            //     area: getRandomTypes(areaTypes, 2),
            //     category: getRandomTypes(categoryTypes, 2),
            //     ingredient: getRandomTypes(ingredientTypes, 3),
            //     tag: getRandomTypes(tagTypes, 2),
            // };

            // setSliderTypes((sliderTypes) => [...sliderTypes, newTypesObj]);

            setIsLoading(false);
        } catch (error) {
            console.error(error.message);
        }
    };
console.log(tagTypes);
    const getRandomTypes = (typeArray, count) => {
        const randomIndices = numberSet(count, typeArray.length);
        const randomTypes = [];

        for (const index of randomIndices) {
            randomTypes.push(typeArray[index]);
        }

        return randomTypes;
    };

    const numberSet = (desired, max) => {
        // condition makes sure while loop isn't sticky
        if (max < desired) {
            desired = max;
        }

        const set = new Set();

        while (set.size < desired) {
            set.add(Math.floor(Math.random() * max));
        }

        return [...set];
    };

    return (
        <>
            <div>
                {isLoading ? (
                    <p>Prep Recipes...</p>
                ) : (
                    <>
                        {/* <Favorites title="favorites"  /> */}

                        {/* <FamilyGroups title="family"  /> */}

                        {/* <MyRecipes title="myRecipes"  /> */}

                        <h4>Area</h4>
                        <RecipeSlide title="area" slideList={areaTypes} />

                        <h4>Ingredients</h4>
                        <RecipeSlide
                            title="ingredient"
                            slideList={ingredientTypes}
                        />

                        <h4>Category</h4>
                        <RecipeSlide
                            title="category"
                            slideList={categoryTypes}
                        />

                        <h4>Tags</h4>
                        <RecipeSlide title="tag" slideList={tagTypes} />
                    </>
                )}
            </div>
        </>
    );
};
export default HomePage;
