import { NavBar } from "../../components/NavBar/NavBar"
import { RecipeCard } from "../../components/RecipeCard/RecipeCard"
export function HomePage(){
    return( 
    <>
        <NavBar/>
        <div className="container">
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
        </div>
        
    </>
    )
}