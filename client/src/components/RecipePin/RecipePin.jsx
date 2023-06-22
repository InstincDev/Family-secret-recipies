import { pin, mealInfo } from "./RecipePin.module.sass";
import RecipeCard from "../RecipeCard/RecipeCard";

const RecipePin = ({ meal, description, image }) => {
    return (
        <div className={pin}>
            <a href={"/recipe"}>
                <img src={image} alt="Placeholder Image" />
                <div className={mealInfo}>
                    <h2>{meal}</h2>
                    <p>{description}</p>
                </div>
            </a>
        </div>
    );
};

export default RecipePin;
