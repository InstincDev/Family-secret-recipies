const URL = "http://localhost:7575/recipe"

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