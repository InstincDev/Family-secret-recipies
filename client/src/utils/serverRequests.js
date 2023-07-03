import axios from "axios";

const URL = import.meta.env.VITE_REACT_APP_URL;

export const fetchRecipes = async () => {
    const response = axios.get(URL);

    return response;
    // TODO - randomize data
};

export const fetchRecipeSlides = async (group, type)=>{
    const response = axios.get(URL)

    const recipes = (await response).data.filter(recipe => recipe[group] === "")

    return recipes
}
