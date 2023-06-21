import { useEffect, useState } from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import { RecipeCard } from "../../components/RecipeCard/RecipeCard";
import {mealList} from "./HomePage.module.sass"

export function HomePage() {
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
                console.log(data);
                // TODO - randomize data
            } catch (error) {
                console.log(error.message);
            }
        }
        getRecipes();
    }, []);

    return (
        <>
            <NavBar />
            <div>
                <ul className="container">
                    {recipeList &&
                        recipeList.map(({ meal, category, image }, i) => (
                            <li className= {mealList} key={`recipeList-${i}`}>
                                <RecipeCard
                                    meal={meal}
                                    description={category}
                                    image={image}
                                />
                            </li>
                        ))}
                </ul>
                {/* <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard /> */}
            </div>
        </>
    );
}
