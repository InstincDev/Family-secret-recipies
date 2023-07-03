import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import RecipeCard from "./components/RecipeCard/RecipeCard.jsx";
import { UserProfilePage } from "./pages/UserProfilePage/UserProfilePage.jsx";
import { fetchRecipes } from "./utils/serverRequests.js";
import "./App.css";

//ToDo
// create function for getting types
// update state sliderTypes obj
// pass state sliderTypes obj to Home page

function App() {
    const [recipeList, setRecipeList] = useState([]);

    const [sliderTypes, setSliderTypes] = useState([]);
   

    useEffect(() => {
        const getRecipes = async () => {
            try {
                const response = await fetchRecipes();
                const randomRecipes = getRandomTypes(response.data, 10);

                setRecipeList(randomRecipes);
            } catch (error) {
                console.log(error.message);
            }
        };

        const getSliderTypes = async (types) => {
            try {
                const recipes = await fetchRecipes();
                const recipeData = recipes.data;

                const recipeSet = new Set();
                for (const recipe of recipeData) {
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
                console.log(error.message);
            }
        }

        getRecipes();
        getSliderTypes("area");
        getSliderTypes("category");
        getSliderTypes("tag");
        getSliderTypes("ingredient");
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
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<HomePage recipeList = {recipeList} sliderTypes={sliderTypes} />}
                    />
                    <Route
                        path="/recipe/:id"
                        element={<RecipeCard recipeList={recipeList} />}
                    />
                    <Route path="/user" element={<UserProfilePage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
