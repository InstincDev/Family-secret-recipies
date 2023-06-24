import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import { pin, mealInfo } from "./RecipePin.module.sass";


const RecipePin = ({ id, meal, description, image }) => {
      
    return (
        <div className={pin}>
            <Link to={`/recipe/${id}`} >
                <img src={image} alt="Placeholder Image" />
                <div className={mealInfo}>
                    <h2>{meal}</h2>
                    <p>{description}</p>
                    <p></p>
                </div>
            </Link>
        </div>
    );
};

export default RecipePin;
