const URL = import.meta.env.VITE_REACT_APP_URL

export async function getRecipes(){
    try {
        const response = await fetch(URL)
        const data = await response.json()
        // console.log(data);
        return data[0]
        // TODO - randomize data
            
    } catch (error) {
        console.log(error.message)
    }
}