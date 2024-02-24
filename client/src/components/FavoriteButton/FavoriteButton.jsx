import React, { useEffect, useState } from 'react'
import { fetchRecipes, fetchFavorites, fetchUnfavorites  } from "../../utils/serverRequests.js";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useParams } from 'react-router';

//TODO
  // Add Favorites button to recipe pins
  // Remove Favorite from Apple Fritter ect.

const FavoriteButton = () => {
    const{id} = useParams()
    const [favorited, setFavorited] = useState(false);
    const [favorites, setFavorites] = useState(0)

  useEffect(()=>{
    const getFavorites = async()=>{
        const recipes = await fetchRecipes();
        const data = recipes.data;
        const recipe = data.find((recipes) => recipes._id === id)
        console.log(recipe.favorites);
        setFavorited(recipe.favorites > 0);

        setFavorites(recipe.favorites);
    }
    getFavorites()
  }, [id])
    
    
    const handleFavorite = async ()=>{     
            await fetchFavorites(id)
            setFavorited(true);
            setFavorites(favorites + 1)
    }
    const handleUnfavorite = async ()=>{
          await fetchUnfavorites(id)
          setFavorited(false)
          setFavorites(favorites - 1)
  }

    console.log(favorites);
    console.log(favorited);

    return (
    <div>
        {favorited ? <button onClick={handleUnfavorite}><FaRegHeart /></button> : <button onClick={handleFavorite}><FaHeart /></button>  
        }
        
       
        {favorites}
        </div>
  )
}

export default FavoriteButton