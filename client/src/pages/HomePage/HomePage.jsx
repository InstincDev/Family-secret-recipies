import { useContext, useEffect, useState } from "react";
import { fetchRecipes } from "../../utils/serverRequests.js"
import { RecipeAPIContext } from "../../utils/RecipeAPIContext.jsx";
import NavBar from "../../components/NavBar/NavBar";
import Favorites from "../../components/Sliders/User/Favorites/Favorites";
import FamilyGroups from "../../components/Sliders/User/FamilyGroups/FamilyGroups";
import RecipeSlide from "../../components/Sliders/RecipeSlide";

const HomePage = () => {
    const {recipeData, setRecipeData} = useContext(RecipeAPIContext)
    const [sliderTypes, setSliderTypes] = useState([]);
    const [areaTypes, setAreaTypes] = useState([]);
    const [categoryTypes, setCategoryTypes] = useState([]);
    const [ingredientTypes, setIngredientTypes] = useState([]);
    const [tagTypes, setTagTypes] = useState([]);

    useEffect(() => {

        const getSliderTypes = async (types) => {
            try {
                const recipes = await fetchRecipes();
                const data = recipes.data;
                setRecipeData(data)

                const recipeSet = new Set();
                for (const recipe of data) {
                  if( types === "tag" && recipe[types] != null ){
                     recipeSet.add(...recipe[types]);
                    
                  } else if (types === "ingredient" && recipe[types] != null) {
                    for (const ingre of recipe[types] ) {
                      recipeSet.add(ingre.ingredient);
                  }
                    }else {
                       recipeSet.add(recipe[types]);
                  } 
                }
              
                const recipeTypes = [...recipeSet].sort();
               
                const randRecipeTypes = types === "ingredient"?getRandomTypes(recipeTypes, 3):getRandomTypes(recipeTypes, 2);

                const newTypesObj = { [types]: randRecipeTypes };

                setSliderTypes((sliderTypes) => [...sliderTypes, newTypesObj]);
            } catch (error) {
                console.error(error.message);
            }
        }

        getSliderTypes("area");
        getSliderTypes("category");
        getSliderTypes("tag");
        getSliderTypes("ingredient");

        // console.log(recipeData);

        

        typeState();
    }, [ setRecipeData, setAreaTypes, setCategoryTypes,setIngredientTypes, setTagTypes]);

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

const typeState = () => {
            try {
                for (const group of sliderTypes) {
                    const key = Object.keys(group)[0];
                    switch (key) {
                        case "area":
                            setAreaTypes(group[key]);
                            break;
                        case "category":
                            setCategoryTypes(group[key]);
                            break;
                        case "ingredient":
                            setIngredientTypes(group[key]);
                            break;
                        case "tag":
                            setTagTypes(group[key]);
                            break;
                    }
                }
            } catch (error) {
                console.error(error.message);
            }
        }; 

    return (
        <>
            <NavBar />
            <div>
                {/* <Favorites title="Favorites"  /> */}

                {/* <FamilyGroups title="Family Group"  /> */}
                <h4>Area</h4>

                <RecipeSlide
                    title="area"
                   
                    slideList={areaTypes}
                />
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
                <RecipeSlide
                    title="tag"
                    
                    slideList={tagTypes}
                />
            </div>
        </>
    );
};
export default HomePage;
