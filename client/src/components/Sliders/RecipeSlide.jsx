import { useState, useEffect, useContext } from "react";
import { RecipeAPIContext } from "../../utils/RecipeAPIContext.jsx";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { fetchRecipes } from "../../utils/serverRequests.js"
import RecipePin from "../RecipePin/RecipePin";
import { wrapper, mealList } from "../Sliders/Sliders.module.sass";


//ToDo
// create useEffect fn to get random recipes by passing state obj array
// map separate array elems into sliders
// Add subTitle for each slider

const RecipeSlide = ({  title, slideList }) => {
    const {recipeData} = useContext(RecipeAPIContext)
    const [recipeSlide, setRecipeSlide] = useState([]);

     useEffect(() => {
        const getRecipes = async () => {
            try {
                const slides = slideList.map((slide)=>{
                    const recipes = recipeData.filter((recipe)=>{
                       
                        if(title === "ingredient"){
                        for (const ingre of recipe[title]) {
                            if(ingre[title] === slide){
                                return ingre[title] === slide
                            }   
                        }
                       }else if(title === "tag"){
                        
                        for (const tags in recipe[title]) {
                            return recipe[title][tags] === slide
                        }
                       } else{ return recipe[title]  === slide}
                    })
                    
                    
                    const randomRecipes = getRandomTypes(recipes, 10)
                    return randomRecipes
                })
                setRecipeSlide(slides);
                
            } catch (error) {
                console.error(error.message);
            }
        };

        getRecipes();
    }, [slideList, title,recipeData]);

    // console.log(recipeSlide);
    // console.log(recipeData);
    
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
