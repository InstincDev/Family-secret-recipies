import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Favorites from "../../components/Sliders/User/Favorites/Favorites";

import Area from "../../components/Sliders/Area/Area";

import Category from "../../components/Sliders/Category/Category";

import Ingredients from "../../components/Sliders/Ingredients/Ingredients";

import Tags from "../../components/Sliders/Tags/Tags";

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
                <Area
                    title="area"
                    slideList={areaTypes}
                />
                <Category
                    title="Category"
                    recipeList={recipeList}
                    slideList={categoryTypes}
                />
                <Ingredients
                    title="Ingredients"
                    recipeList={recipeList}
                    slideList={ingredientTypes}
                />
                <Tags
                    title="Tags"
                    recipeList={recipeList}
                    slideList={tagTypes}
                />

            </div>
        </>
    );
};
export default HomePage;
