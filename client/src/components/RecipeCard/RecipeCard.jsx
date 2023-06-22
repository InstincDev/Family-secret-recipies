import React from "react";
import {title, recipe, recipeInfo, directions, ingredients, comments } from "./RecipeCard.module.sass"
const RecipeCard = () => {
    return (
      <>
            <div class={recipe}>
                <section class={title}>
                    <h2>Recipe Title</h2>
                    <p>
                        Recipe Description - Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Dignissimos, nam
                        consequuntur? Recusandae voluptatem repellat, sapiente
                        labore tempora minima accusamus aliquam molestiae iure
                        similique quae culpa.
                    </p>
                </section>
                <aside class={recipeInfo}>
                    <img
                        src="https://via.placeholder.com/800x800"
                        alt="Placeholder Image"
                    />

                    <section class={ingredients}>
                        <h3>Ingredients</h3>
                        <ul>
                            <li>blah</li>
                            <li>blah</li>
                            <li>blah</li>
                            <li>blah</li>
                            <li>blah</li>
                            <li>blah</li>
                            <li>blah</li>
                            <li>blah</li>
                            <li>blah</li>
                            <li>blah</li>
                            <li>blah</li>
                            <li>blah</li>
                            <li>blah</li>
                        </ul>
                    </section>
                </aside>
            </div>
            <div class={directions}>
                <section>
                    <h3>Directions</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellendus explicabo aperiam esse possimus, atque
                        vitae.
                    </p>

                    <ol>
                        <li>First do this</li>
                        <li>Then do this.</li>
                        <li>And then this.</li>
                        <li>And then this.</li>
                        <li>And then this.</li>
                        <li>And then this.</li>
                        <li>And then this.</li>
                        <li>And then this.</li>
                    </ol>
                </section>

                <section class={comments}>
                    <h3>Comments</h3>
                    <ul>
                        <li>
                            <p>User 1: This is a great recipe!</p>
                            <small>2 hours ago</small>
                        </li>
                        <li>
                            <p>User 2: I tried this and it was delicious!</p>
                            <small>1 day ago</small>
                        </li>
                    </ul>
                    <form action="/recipes/sample-recipe/like" method="POST">
                        <button type="submit">Like</button>
                    </form>
                    <form
                        action="/recipes/sample-recipe/comments"
                        method="POST"
                    >
                        <label for="comment">Comment:</label>
                        <input type="text" name="comment" id="comment" />
                        <button type="submit">Post Comment</button>
                    </form>
                </section>
            </div>
       </>
    );
};

export default RecipeCard;
