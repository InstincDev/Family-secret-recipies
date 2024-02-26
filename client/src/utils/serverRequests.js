import axios from "axios";

const URL = import.meta.env.VITE_REACT_APP_URL;

export const fetchRecipes = async () => {
    const response = axios.get(URL);

    return response;
    // TODO - randomize data
};

export const fetchFavorites = async (id)=>{
  
    const response = axios.post(URL+'/'+id+'/favorite',undefined,{   
        withCredentials: true,
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    })
    return response
}

export const fetchUnfavorites = async (id)=>{
    const response = axios.post(URL+'/'+id+'/unfavorite',undefined,{
       withCredentials: true,
       headers:{
            Accept: "application/json",
            "Content-Type": "application/json",
       }
    })
    return response
}
