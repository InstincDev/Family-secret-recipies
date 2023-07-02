import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import RecipePin from "../../RecipePin/RecipePin";
import { wrapper, mealList } from "../../Sliders/Sliders.module.sass";

//ToDo
// map separate array elems into sliders
// Add subTitle for each slider

const Category = ({ recipeList, title }) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <Splide
                    options={{ perPage: 4, pagination: false, drag: "free" }}
                >
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
            <div>
                <Splide
                    options={{ perPage: 4, pagination: false, drag: "free" }}
                >
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
        </div>
    );
};

export default Category;
