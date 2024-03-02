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
    

    const [showAll, setShowAll] = useState(false);
  
    const visibleRecipeList =  showAll ? recipeList : recipeList.slice(0, 10)

console.log(visibleRecipeList);

    console.log(recipeList);
   
    function handleShowAll() {
        setShowAll(true);
    }
    return(
        <div >
         
             <Splide options={{perPage: 4, pagination: false, drag: 'free'}}>
                {visibleRecipeList &&
                    visibleRecipeList.map((recipe, i) => (
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
                    { !showAll && visibleRecipeList.length!= recipeList.length? <SplideSlide> <button
                                                      onClick={handleShowAll} >
                                                      Show All
                                                  </button></SplideSlide> : null}
            </Splide>
        </div> 
    );
};

export default Favorites;
