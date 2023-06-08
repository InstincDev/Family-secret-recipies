import { Router } from "express";
import Connection from "../database/db.js";
import Meal from "../database/Model/mealSchema.js";
import fetch from "node-fetch";
const seedRouter = Router();

// Route to save a new meal
seedRouter.get("/", async (req, res) => {
    try {
        await Connection();
        const meal = await Meal.find({ meal: "Apple Frangipan Tart" });
        console.log(meal);
        res.status(200).json(meal);
    } catch (error) {
        console.log(error.message);
        res.status(400).send(error.message);
    }
});

const URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=`;
// 97 < 123
seedRouter.post("/", async (req, res) => {
    try {
        for (let i = 97; i < 123; i++) {
            let alpha = String.fromCharCode(i);
            const recipe = await fetch(URL + alpha);
            console.log(URL + alpha);
            let data = await recipe.json();
            if (data.meals == null) {
                continue;
            }
            console.log(data.meals.length);
             postRecipes(data.meals, alpha);
           
        }
        res.status(200).send("Database has been seeded!");
    } catch (error) {
        console.log(error.message);
        res.status(400).send(error.message);
    }
});


async function postRecipes(data, alpha) { 
    let numNewRecipes = 0
    await Connection();
    for (let i = 0; i <= data.length - 1; i++) {
        let meal = data[i].strMeal;
        const category = data[i].strCategory;
        const area = data[i].strArea;
        const instruction = data[i].strInstructions;
        const ingredient = getIngreAndMeas(data[i]);
        const image = data[i].strMealThumb;
        const tag = getTags(data[i].strTags);
        const createdBy = "TheMealDB";

       const recipes= new Meal({
            meal: meal,
            category: category,
            area: area,
            instructions: instruction,
            ingredient: ingredient,
            image: image,
            tag: tag,
            createdBy: createdBy,
        });

        try {
          recipes.save()
            console.log(
                `Voila! Recipe ${alpha} - ${i + 1} is uploaded successfully`
            );
            numNewRecipes++
        } catch (error) {
            console.log(error.message);
            console.log("Recipe already present, create something new!");
        }
    } 
    console.log(numNewRecipes);
}

function getIngreAndMeas(data) {
    let ingredandmeas = [];
    for (let i = 1; i <= 20; i++) {
        if (
            data[`strIngredient${i}`] !== null &&
            data[`strIngredient${i}`] !== ""
        ) {
            ingredandmeas.push({
                ingredient: data[`strIngredient${i}`],
                measurement: data[`strMeasure${i}`],
            });
        }
    }
    return ingredandmeas;
}

function getTags(data) {
    return data !== null ? data.split(",") : null;
}

export default seedRouter;
