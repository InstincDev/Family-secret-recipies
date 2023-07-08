import { createContext, useState } from "react";

export const RecipeAPIContext = createContext();

export const RecipeProvider = ({children}) => {
    const [recipeData, setRecipeData] = useState(null);


const contextValue ={
    recipeData, setRecipeData
}

return <RecipeAPIContext.Provider value={contextValue}>{children}</RecipeAPIContext.Provider>
}