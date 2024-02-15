import axios from "axios";

const URL = import.meta.env.VITE_REACT_APP_URL;

export const fetchRecipes = async () => {
    // TODO: add try and catch
    const response = axios.get(URL);

    return response;

};
