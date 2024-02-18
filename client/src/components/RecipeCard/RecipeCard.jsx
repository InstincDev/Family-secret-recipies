import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import {
    title,
    recipeCard,
    recipeInfo,
    directions,
    ingredients,
    comments,
} from "./RecipeCard.module.sass";
import NavBar from "../../components/NavBar/NavBar";
import { fetchRecipes } from "../../utils/serverRequests.js";

const RecipeCard = ({ recipeList }) => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        const getRecipes = async()=>{
            const recipes = await fetchRecipes();
            const data = recipes.data;
            console.log(data);
            setRecipe(data.filter((recipes) => recipes._id === id));
        }
        getRecipes()
        
    }, []);
    console.log(recipe);
    return (
        <>
            {recipe.map((recipes, i) => (
                <div key={i}>
                    <h1>{recipes.meal}</h1>
                    
                    <div className={recipeCard}>
                        <section class={title}>
                            <h3>Created By: {recipes.createdBy}</h3>
                            <div>
                                <span>{recipes.category}</span> - <span>{recipes.area}</span>
                            </div>
                            
                        </section>
                        <aside class={recipeInfo}>
                            <img src={recipes.image} alt="Placeholder Image" />

                            <section class={ingredients}>
                                <h3>Ingredients</h3>
                                <ul>
                                    {recipes.ingredient.map((inge, i) => (
                                        <li
                                            key={`inge${i}`}
                                        ><span>{inge.ingredient}</span> - <span>{inge.measurement}</span></li>
                                    ))}
                                </ul>
                            </section>
                        </aside>
                        <small>tags: <ul>{recipes.tag? recipes.tag.map((tag,i)=>(<li key={`tag${i}`}>{tag}</li>)): null}</ul></small>
                    </div>
                    <div className={directions}>
                        <section>
                            <h3>Directions</h3>
                            <p>{recipes.instructions}</p>
                        </section>

                        <section class={comments}>
                            <h3>Comments</h3>
                            <ul>
                                <li>
                                    <p>User 1: This is a great recipe!</p>
                                    <small>2 hours ago</small>
                                </li>
                                <li>
                                    <p>
                                        User 2: I tried this and it was
                                        delicious!
                                    </p>
                                    <small>1 day ago</small>
                                </li>
                            </ul>
                            <form
                                action="/recipes/sample-recipe/like"
                                method="POST"
                            >
                                <button type="submit">Like</button>
                            </form>
                            <form
                                action="/recipes/sample-recipe/comments"
                                method="POST"
                            >
                                <label for="comment">Comment:</label>
                                <input
                                    type="text"
                                    name="comment"
                                    id="comment"
                                />
                                <button type="submit">Post Comment</button>
                            </form>
                        </section>
                    </div>
                </div>
            ))}
        </>
    );
};

export default RecipeCard;
