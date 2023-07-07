import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import RecipePin from "../../RecipePin/RecipePin";
import { fetchRecipeSlides } from "../../../utils/serverRequests.js";
import { wrapper, mealList } from "../../Sliders/Sliders.module.sass";
import { useState, useEffect } from "react";

//ToDo
// create useEffect fn to get random recipes by passing state obj array
// map separate array elems into sliders
// Add subTitle for each slider

const Area = ({ recipeList, title, slideList }) => {
    const [recipeSlide1, setRecipeSlide1] = useState([]);
    const [recipeSlide2, setRecipeSlide2] = useState([]);

    useEffect(() => {
        const getRecipes = async () => {
            try {
                const response = await fetchRecipeSlides();
                const data = response.data;
                
                const slide1 = data.filter(recipe=> recipe[title] === slideList[0])
               
                const slide2 = data.filter(recipe=> recipe[title] === slideList[1])
                
                
                const randomRecipes1 = getRandomTypes(slide1, 10);
                setRecipeSlide1(randomRecipes1);

                const randomRecipes2 = getRandomTypes(slide2, 10);
                setRecipeSlide2(randomRecipes2);

            } catch (error) {
                console.error(error.message);
            }
        };
       
        // const sortRecipes = (lists)=>{

        //     try {
        //         console.log(lists);
        //         const recipes = lists.filter(recipe => {
        //             if (recipe[title.toLowerCase()] === slideList[0]) {
        //                 console.log(recipe);
        //                 // setRecipeSlide1(()=>[...recipeSlide1, recipe]);
        //             } 
        //         });
        //         console.log(recipes);
               
        //         const randomRecipes = getRandomTypes(recipes, 10);
        //         setRecipeSlide1(randomRecipes);
        //     } catch (error) {
        //         console.error(error.message);
        //     }
        // }
    getRecipes();
        
    }, [slideList]);
 console.log(slideList);
    console.log(recipeSlide1);
    console.log(recipeSlide2);

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
            <h3>{slideList[0]}</h3>
            <div>
                <Splide
                    options={{ perPage: 4, pagination: false, drag: "free" }}
                >
                    {recipeSlide1 &&
                        recipeSlide1.map((recipe, i) => (
                            <SplideSlide key={`recipeList-${i}`}>
                                <div className={mealList}>
                                    <RecipePin
                                        key={`recipeList1-${i}`}
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
            <h3>{slideList[1]}</h3>
            <div>
                <Splide
                    options={{ perPage: 4, pagination: false, drag: "free" }}
                >
                    {recipeSlide2 &&
                       recipeSlide2.map((recipe, i) => (
                            <SplideSlide key={`recipeList-${i}`}>
                                <div className={mealList}>
                                    <RecipePin
                                        key={`recipeList2-${i}`}
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
    );
};

export default Area;
