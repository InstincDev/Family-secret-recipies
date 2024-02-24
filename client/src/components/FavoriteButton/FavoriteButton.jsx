import React, { useEffect, useState } from 'react'
import { fetchRecipes, fetchFavorites  } from "../../utils/serverRequests.js";
import { FaHeart } from "react-icons/fa";
import { useParams } from 'react-router';

const FavoriteButton = () => {
    const{id} = useParams()
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
    
    
    const handleFavorite = async ()=>{
        if(favorited){
            await fetchFavorites(id)
            setFavorited(true);
            setFavorites(favorites += 1)
            console.log(favorites);
            console.log(favorited);
  
        }
    }
    
    return (
    <div>
        <button onClick={handleFavorite}><FaHeart /></button>
        </div>
  )
}

export default FavoriteButton