import { NavBar } from "../../components/NavBar/NavBar";
import { RecipeCard } from "../../components/RecipeCard/RecipeCard";
// import { getRecipes } from "../../utils/serverRequests";

export function HomePage() {
    // await getRecipes();

    // use useEffect to fetch and render data onLoad()
    return (
        <>
            <NavBar />
            <div className="container">
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
            </div>
        </>
    );
}
