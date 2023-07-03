import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import RecipeCard from "./components/RecipeCard/RecipeCard.jsx";
import { UserProfilePage } from "./pages/UserProfilePage/UserProfilePage.jsx";
import { fetchRecipes } from "./utils/serverRequests.js";
import "./App.css";

//ToDo
// create state array for slider types
// create fn to get random types for each slider state array
// create state obj for all slider state arrays
// pass state obj to Home page

function App() {
    const [recipeList, setRecipeList] = useState([]);

    const [sliderTypes, setSliderTypes] = useState([]);
    const [areaTypes, setAreaTypes] = useState({});
    const [categoryTypes, setCategoryTypes] = useState({});

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

        const getAreaTypes = async () => {
            try {
                const recipeAreas = await fetchRecipes();
                const areaData = recipeAreas.data;

                const set = new Set();
                for (const recipe of areaData) {
                    if (recipe.area != null) {
                        set.add(recipe.area);
                    }
                }
                const areaTypes = [...set].sort();
                const rand = getRandomTypes(areaTypes, 2)
                const newData = { "area": rand };
                // console.log(`new Array data ${newData}`);
                setAreaTypes(newData);
            } catch (error) {
                console.log(error.message);
            }
        };
        
        const getCategoryTypes = async () => {
            try {
                const recipeCategories = await fetchRecipes();
                const categoryData = recipeCategories.data;

                const set = new Set();
                for (const recipe of categoryData) {
                    if (recipe.category != null) {
                        set.add(recipe.category);
                    }
                }
                const categoryTypes = [...set].sort();
                  const rand = getRandomTypes(categoryTypes, 2)
                const newData = { "category": rand };
                // console.log(`new CategoryData ${newData}`);
                setCategoryTypes(newData);
            } catch (error) {
                console.log(error.message);
            }
        };
        
        //   const getTags = async () => {
        //     try {
        //         const recipeTags = await fetchRecipes();
        //         const tagData = recipeTags.data
        //         const set = new Set()
        //         for (const recipe of tagData) {
        //           if(recipe.tag != null){
        //             set.add(...recipe.tag)
        //           }
        //         }
        //         console.log([...set].sort());
        //     } catch (error) {
        //         console.log(error.message);
        //     }
        // };
        //   const getTags = async () => {
        //     try {
        //         const recipeTags = await fetchRecipes();
        //         const tagData = recipeTags.data
        //         const set = new Set()
        //         for (const recipe of tagData) {
        //           if(recipe.tag != null){
        //             set.add(...recipe.tag)
        //           }
        //         }
        //         console.log([...set].sort());
        //     } catch (error) {
        //         console.log(error.message);
        //     }
        // };
        getRecipes();
        getAreaTypes();
        getCategoryTypes();
        setSliderTypes([...sliderTypes, areaTypes])
// setSliderTypes( [...sliderTypes, categoryTypes])
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
                        element={<HomePage recipeList={recipeList} />}
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
