import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import {
    title,
    recipeCard,
    recipeInfo,
    directions,
    ingredients,
    comments,
} from "./RecipeCard.module.sass";
import NavBar from "../../components/NavBar/NavBar";
import { RecipeAPIContext } from "../../utils/RecipeAPIContext.jsx"

const RecipeCard = () => {
    const { id } = useParams();
    const {recipeData} = useContext(RecipeAPIContext)
    const recipe = recipeData.find((recipe) => recipe._id === id)
 
    console.log(id);
    
//  useEffect(() => {

//       const showRecipe= async()=>{
//         try {
//              const card = recipeData.map(meals =>{
//                 meals.filter((recipes) => console.log(recipes._id === id))
//              })
//                     setRecipe(card)
//         } catch (error) {
//             console.error(error.message)
//         }
       
    
//     }
// }, [recipeData, setRecipe]);
   console.log(recipe);
    
   return (
        <>
            <NavBar />
                <div>
                    <h1>{recipe.meal}</h1>
                    
                    <div className={recipeCard}>
                        <section class={title}>
                            <h3>Created By: {recipe.createdBy}</h3>
                            <div>
                                <span>{recipe.category}</span> - <span>{recipe.area}</span>
                            </div>
                            
                        </section>
                        <aside class={recipeInfo}>
                            <img src={recipe.image} alt="Placeholder Image" />

                            <section class={ingredients}>
                                <h3>Ingredients</h3>
                                <ul>
                                    {recipe.ingredient.map((inge, i) => (
                                        <li
                                            key={`inge${i}`}
                                        ><span>{inge.ingredient}</span> - <span>{inge.measurement}</span></li>
                                    ))}
                                </ul>
                            </section>
                        </aside>
                        <small>Tags: {recipe.tag && <ul>{recipe.tag.map((tags, i) => (<li key={`tag${i}`}>{tags}</li>))}</ul>}</small>
                    </div>
                    <div className={directions}>
                        <section>
                            <h3>Directions</h3>
                            <p>{recipe.instructions}</p>
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
            
        </>
    );
};

export default RecipeCard;
