import { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import RecipeCard from "./components/RecipeCard/RecipeCard.jsx";
import {UserProfilePage} from "./pages/UserProfilePage/UserProfilePage.jsx";
import './App.css'

function App() {
  const [recipeList, setRecipeList] = useState(null);
  //    const [error, setError] = useState(null)

  // use useEffect to fetch and render data onLoad()

  useEffect(() => {
      const URL = "http://localhost:7575/recipe";
      async function getRecipes() {
          try {
              const response = await fetch(URL);
              const data = await response.json();
              setRecipeList(data);
              // TODO - randomize data
          } catch (error) {
              console.log(error.message);
          }
      }
      getRecipes();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage recipeList={recipeList} />} />
          <Route path="/recipe/:id" element={<RecipeCard recipeList={recipeList}/>}/>
          <Route path="/user" element={<UserProfilePage/>}/>
        </Routes>
      </BrowserRouter>  
    </>
  )
}

export default App
