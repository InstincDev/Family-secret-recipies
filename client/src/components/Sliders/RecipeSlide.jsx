import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import RecipePin from "../RecipePin/RecipePin";
import { wrapper, mealList } from "../Sliders/Sliders.module.sass";
import { fetchRecipeSlides } from "../../utils/serverRequests.js";

//ToDo
// create useEffect fn to get random recipes by passing state obj array
// map separate array elems into sliders
// Add subTitle for each slider

const RecipeSlide = ({  title, slideList }) => {
    const [recipeSlide, setRecipeSlide] = useState([]);

    useEffect(() => {
        const getRecipes = async () => {
            try {
                const response = await fetchRecipeSlides();
                const data = response.data;
                
                const slides = slideList.map((slide)=>{
                    const recipes = data.filter((recipe)=>recipe[title]  === slide)
                    const randomRecipes = getRandomTypes(recipes,10)
                    return randomRecipes
                })
                setRecipeSlide(slides)
                
            } catch (error) {
                console.error(error.message);
            }
        };

        getRecipes();
    }, [slideList, title]);
    
    console.log(title);
    console.log(recipeSlide);
    
    function getRandomTypes(typeArray, count) {
        const randomIndices = numberSet(count, typeArray.length);
        const randomTypes = [];

        for (const index of randomIndices) {
            randomTypes.push(typeArray[index]);
        }

        return randomTypes;
    }

    function numberSet(desired, max) {
        // condition makes sure while loop isn't sticky
        if (max < desired) {
            desired = max;
        }

        const set = new Set();

        while (set.size < desired) {
            set.add(Math.floor(Math.random() * max));
        }

        return [...set];
    }

    return (
        <div>
          {slideList.map((slide, index) => (
            <div key={index}>
              <h3>{slide}</h3>
              <div>
                <Splide options={{ perPage: 4, pagination: false, drag: 'free' }}>
                  {recipeSlide[index] &&
                    recipeSlide[index].map((recipe, i) => (
                      <SplideSlide key={`recipeList-${i}`}>
                        <div className={mealList}>
                          <RecipePin
                            key={`recipeList-${slide}-${i}`}
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
            </div>
          ))}
        </div>
      );
    

   
};

export default RecipeSlide;
