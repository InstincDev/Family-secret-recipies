import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import RecipePin from "../../components/RecipePin/RecipePin";
import { wrapper, mealList } from "./Favorites.module.sass";

const Favorites = ({ recipeList }) => {
    return ( 
   
        <div >
          <h3>Favorites</h3>
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
