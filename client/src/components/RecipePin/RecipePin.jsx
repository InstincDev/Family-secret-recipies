import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import { pin, mealInfo } from "./RecipePin.module.sass";
import FavoriteButton from "../FavoriteButton/FavoriteButton";


const RecipePin = ({ id, meal, description, image }) => {
      
    return (
        <div className={pin}>
            <Link to={`/recipe/${id}`} >
                <img src={image} alt="Placeholder Image" />
            </Link>
            
                <div className={mealInfo}>
            <Link to={`/recipe/${id}`}>
                    <h2>{meal}</h2>
                    <p>{description}</p>
            </Link>
                    <p><FavoriteButton id = {id}/></p>
                </div>
            
            
        </div>
    );
};

export default RecipePin;
