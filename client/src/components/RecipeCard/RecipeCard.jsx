import { pin, mealInfo } from "./RecipeCard.module.sass";

export function RecipeCard({ meal, description, image }) {
    return (
        <div className={pin}>
            <a href="recipe.html">
                <img src={image} alt="Placeholder Image" />
                <div className={mealInfo}>
                    <h2>{meal}</h2>
                    <p>{description}</p>
                </div>
            </a>
        </div>
    );
}
