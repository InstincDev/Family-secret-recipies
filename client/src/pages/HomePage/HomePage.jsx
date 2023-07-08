import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Favorites from "../../components/Sliders/User/Favorites/Favorites";

import RecipeSlide from "../../components/Sliders/RecipeSlide";



import FamilyGroups from "../../components/Sliders/User/FamilyGroups/FamilyGroups";

const HomePage = ({ sliderTypes, recipeList }) => {
    const [areaTypes, setAreaTypes] = useState([]);
    const [categoryTypes, setCategoryTypes] = useState([]);
    const [ingredientTypes, setIngredientTypes] = useState([]);
    const [tagTypes, setTagTypes] = useState([]);

    useEffect(() => {
        const typeState = () => {
            try {
                for (const group of sliderTypes) {
                    const key = Object.keys(group)[0];
                    switch (key) {
                        case "area":
                            setAreaTypes(group[key]);

                            break;
                        case "category":
                            setCategoryTypes(group[key]);
                            break;
                        case "ingredient":
                            setIngredientTypes(group[key]);
                            break;
                        case "tag":
                            setTagTypes(group[key]);
                            break;
                    }
                }
            } catch (error) {
                console.error(error.message);
            }
        };

        typeState();
    }, [sliderTypes]);

    return (
        <>
            <NavBar />
            <div>
                <Favorites title="Favorites" recipeList={recipeList} />

                <FamilyGroups title="Family Group" recipeList={recipeList} />
                <h4>Area</h4>

                <RecipeSlide
                    title="area"
                   
                    slideList={areaTypes}
                />
                <h4>Category</h4>

                <RecipeSlide
                    title="category"
                   
                    slideList={categoryTypes}
                />
                <h4>Ingredient</h4>
                <RecipeSlide
                    title="ingredients"
                    
                    slideList={ingredientTypes}
                />
                <h4>Tags</h4>
                <RecipeSlide
                    slideTitle="tags"
                    
                    slideList={tagTypes}
                />
            </div>
        </>
    );
};
export default HomePage;
