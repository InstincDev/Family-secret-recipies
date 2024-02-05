import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import RecipeCard from "./components/RecipeCard/RecipeCard.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import { UserProfilePage } from "./pages/UserProfilePage/UserProfilePage.jsx";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";

//ToDo
// create function for getting types
// update state sliderTypes obj
// pass state sliderTypes obj to Home page

function App() {

    return (
        <>
            <BrowserRouter>
            <NavBar />
                <Routes>
                    <Route
                        path="/"
                        element={<HomePage/>}
                    />
                    <Route
                        path="/login"
                        element={<LoginPage/>}
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
