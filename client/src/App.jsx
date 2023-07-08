import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import RecipeCard from "./components/RecipeCard/RecipeCard.jsx";
import { UserProfilePage } from "./pages/UserProfilePage/UserProfilePage.jsx";
import "./App.css";

//ToDo
// create function for getting types
// update state sliderTypes obj
// pass state sliderTypes obj to Home page

function App() {
    /* // const [recipeList, setRecipeList] = useState([]);

    // const [sliderTypes, setSliderTypes] = useState([]);
   

    useEffect(() => {
     
        
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
    } */

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<HomePage/>}
                    />
                    <Route
                        path="/recipe/:id"
                        element={<RecipeCard/>}
                    />
                    <Route path="/user" element={<UserProfilePage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
