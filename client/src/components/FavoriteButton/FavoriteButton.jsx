import React, { useEffect, useState } from 'react'

const FavoriteButton = (id) => {
  const [favorited, setFavorited] = useState(false);
  const [favorites, setFavorites] = useState(0)
  
  useEffect(()=>{
    const getFavorites = async()=>{
        const recipes = await fetchRecipes();
        const data = recipes.data;
        
        setFavorited(data.filter((recipes) => recipes._id === id));

        setFavorites(data.filter((recipes) => recipes._id === id));
    }
    getFavorites()
  }, [id])
    
    console.log(favorites);
    console.log(favorited);
    
    return (
    <div>FavoriteButton</div>
  )
}

export default FavoriteButton