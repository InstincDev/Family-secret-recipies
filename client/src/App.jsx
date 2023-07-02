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

    useEffect(() => {
        const getRecipes = async () => {
            try {
                const response = await fetchRecipes();
                const randomRecipes = getRandomRecipes(response.data, 10);

                setRecipeList(randomRecipes);

            } catch (error) {
                console.log(error.message);
            }
        };

        const getTags = async () => {
          try {
              const recipeTags = await fetchRecipes();
              const tagData = recipeTags.data
              const set = new Set()
              for (const recipe of tagData) {
                if(recipe.tag != null){
                  set.add(...recipe.tag)
                }
              }
              console.log([...set].sort());
          } catch (error) {
              console.log(error.message);
          }
      };
        getRecipes();
        getTags();
    }, []);

    function getRandomRecipes(recipeArray, count) {
      const randomIndices = numberSet(count, recipeArray.length);
      const randomRecipes = [];
    
      for (const index of randomIndices) {
        randomRecipes.push(recipeArray[index]);
      }
    
      return randomRecipes;
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
