import { useState, useEffect, useContext } from "react";
import useLocalStorage from "../../../../utils/useLocalStorage";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import RecipePin from "../../../RecipePin/RecipePin";
import { wrapper, mealList } from "../../../Sliders/Sliders.module.sass";

//ToDo
// map separate array elems into sliders
// Add subTitle for each slider

const Favorites = ({ recipeList, title }) => {
    

    const [showAll, setShowAll] = useState([]);
    const [recipeSlide, setRecipeSlide] = useLocalStorage(
        "recipeSlide" + title,
        []
    );


    
   return(
        <div >
         
             <Splide options={{perPage: 4, pagination: false, drag: 'free'}}>
                {recipeList &&
                    recipeList.map((recipe, i) => (
                    <SplideSlide key={`recipeList-${i}`}>
                     <div className={mealList}>       
                                <RecipePin
                                    key={`recipeList-${i}`}
                                    id={recipe._id}
                                    meal={recipe.meal}
                                    description={recipe.category}
                                    image={recipe.image}
                                />
                        </div>
                    </SplideSlide>    
                    ))}
            </Splide>
        </div> 
    );
};

export default Favorites;
