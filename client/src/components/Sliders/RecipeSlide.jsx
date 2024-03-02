import { useState, useEffect, useContext } from "react";
import { RecipeAPIContext } from "../../utils/RecipeAPIContext.jsx";
import useLocalStorage from "../../utils/useLocalStorage.jsx";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { fetchRecipes } from "../../utils/serverRequests.js";
import RecipePin from "../RecipePin/RecipePin";
import { wrapper, mealList } from "../Sliders/Sliders.module.sass";

//TODO:
    // Render Show Less button at end of full slides


const RecipeSlide = ({ title, slideList }) => {
  const { recipeData } = useContext(RecipeAPIContext);
  const [showAll, setShowAll] = useState([]);
  const [recipeSlide, setRecipeSlide] = useLocalStorage(
      "recipeSlide" + title,
      []
  );
 
const visibleRecipeSlide = recipeSlide.map((recipes, index) => showAll.includes(index) ? recipes : recipes.slice(0, 10))

  useEffect(() => {
      const getRecipes = async () => {
          try {
              const slides = slideList.map((slide) => {
                  const recipes = recipeData.filter((recipe) => {
                      if (title === "ingredient") {
                          for (const ingre of recipe[title]) {
                              if (ingre[title] === slide) {
                                  return ingre[title] === slide;
                              }
                          }
                      } else if (title === "tag") {
                          for (const tags in recipe[title]) {
                              return recipe[title][tags] === slide;
                          }
                      } else {
                          return recipe[title] === slide;
                      }
                  });
                
                  const shownRecipes = getRandomTypes(recipes, recipes.length)
                      
                console.log(shownRecipes);

                  return shownRecipes;
              });
              console.log(recipeSlide);
              if (recipeSlide.length == 0) {
                  
                setRecipeSlide(slides);
              }
          } catch (error) {
              console.error(error.message);
          }
      };

      getRecipes();
      

  }, [slideList, title, recipeData]);
console.log(slideList);
//   console.log(recipeData);
console.log(recipeSlide);
console.log(visibleRecipeSlide);

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
  function handleShowAll(i) {
      setShowAll([...showAll,i]);
  }
  return (
      <div>
          {slideList.map((slide, index) => (
              <div key={index}>
                  <h3>{slide}</h3>
                  <div>
                      <Splide
                          options={{
                              perPage: 4,
                              pagination: false,
                              drag: "free",
                          }}
                      >
                          {visibleRecipeSlide[index] &&
                              visibleRecipeSlide[index].map((recipe, i) => (
                                 <SplideSlide
                                      key={`recipeList-${i}`}>

                                      <div className={mealList}>
                                          {console.log(visibleRecipeSlide[index].length)}
                                         
                                         {
                                          <RecipePin
                                              key={`recipeList-${slide}-${i}`}
                                              id={recipe._id}
                                              meal={recipe.meal}
                                              description={recipe.category}
                                              image={recipe.image}
                                          />}
                                            

         
                                      </div>
                                      
                                  </SplideSlide>
                              ))}
                              { visibleRecipeSlide[index] && !showAll.includes(index) && visibleRecipeSlide[index].length!= recipeSlide[index].length? <SplideSlide> <button
                                                      onClick={()=>{handleShowAll(index)}} >
                                                      Show All
                                                  </button></SplideSlide> : null}
                      </Splide>
                  </div>
              </div>
          ))}
      </div>
  );
};

export default RecipeSlide;
