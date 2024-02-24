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
  const [showAll, setShowAll] = useState(false);
  const [recipeSlide, setRecipeSlide] = useLocalStorage(
      "recipeSlide" + title,
      []
  );

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

                  const shownRecipes = !showAll
                      ? getRandomTypes(recipes, recipes.length)
                      : recipes;

                  return shownRecipes;
              });
              if (recipeSlide.length == 0) {
                  setRecipeSlide(slides);
              }
          } catch (error) {
              console.error(error.message);
          }
      };

      getRecipes();
  }, [slideList, title, recipeData]);

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
  function handleShowAll() {
      setShowAll(!showAll);
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
                          {recipeSlide[index] &&
                              recipeSlide[index].map((recipe, i) => (
                                  <SplideSlide
                                      key={`recipeList-${i}`}
                                      
                                  >
                                      <div className={mealList}>
                                          {console.log(recipeSlide[index].length)}
                                         
                                         {i <= 10 && !showAll &&
                                          <RecipePin
                                              key={`recipeList-${slide}-${i}`}
                                              id={recipe._id}
                                              meal={recipe.meal}
                                              description={recipe.category}
                                              image={recipe.image}
                                          />}
                                            {i === 10 && !showAll ? <button
                                                      onClick={handleShowAll} >
                                                      Show All
                                                  </button> : <button
                                                      onClick={handleShowAll} style={{display: "none"}}>
                                                      Show All
                                                  </button>}

         
                                            {showAll&&<RecipePin
                                              key={`recipeList-${slide}-${i}`}
                                              id={recipe._id}
                                              meal={recipe.meal}
                                              description={recipe.category}
                                              image={recipe.image}
                                          /> 
                                          }
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
