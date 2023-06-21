import NavBar from "../../components/NavBar/NavBar"
import RecipeCard from "../../components/RecipeCard/RecipeCard"
import HomePage from "../HomePage/HomePage"

const RecipePage = () =>{
    return( 
    <>
        <NavBar/>
        <div>
            <a href={HomePage}> Back</a></div>
        <div class="container">
           <RecipeCard/>
        </div>
    </>
    )
}
export default RecipePage