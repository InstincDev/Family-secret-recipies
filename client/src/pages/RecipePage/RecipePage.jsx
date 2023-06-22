import NavBar from "../../components/NavBar/NavBar"
import RecipeCard from "../../components/RecipeCard/RecipeCard"
import HomePage from "../HomePage/HomePage"

const RecipePage = () =>{
    return( 
    <>
        <NavBar/>
        <div>
            <a href={"/"}> Back</a></div>
        <div className="container">
           <RecipeCard/>
        </div>
    </>
    )
}
export default RecipePage