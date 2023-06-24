import { Link } from "react-router-dom"
import NavBar from "../../components/NavBar/NavBar"
import RecipeCard from "../../components/RecipeCard/RecipeCard"


const RecipePage = ({recipeList}) =>{
   
    return( 
    <>
        <NavBar/>
        <div>
            <Link to={"/"}> Back</Link>
            </div>
        <div className="container">
           <RecipeCard recipes={recipeList}/>
        </div>
    </>
    )
}
export default RecipePage