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
        let mealData;
        for (let i = 97; i < 123; i++) {
            let alpha = String.fromCharCode(i);
            const recipe = await fetch(URL + alpha);
            console.log(URL + alpha);
            let data = await recipe.json();
            if (data.meals == null) {
                continue;
            }
            mealData = getRecipes(data.meals);
            console.log(mealData.length);
            saveRecipes(mealData, alpha, res);
        }
        res.status(200).json(mealData);
    } catch (error) {
        console.log(error.message);
        res.status(400).send(error.message);
    }
});

async function saveRecipes(data, alpha, res) {
    await Connection();
    for (let j = 0; j < data.length - 1; j++) {
        const title = data[j].meal;
        try {
            // const test = await Meal.findOne({ meal: title })
            await data.save();

            console.log(
                `Voila! Recipe ${alpha} - ${j + 1} is uploaded successfully`
            );
        } catch (error) {
            console.log(error.message);
            console.log("Recipe already present, create something new!");
        }
    }
}

function getRecipes(data) {
    const recipes = [];
    for (let i = 0; i <= data.length - 1; i++) {
        // console.log(data[i])
        const meal = data[i].strMeal;
        const category = data[i].strCategory;
        const area = data[i].strArea;
        const instruction = data[i].strInstructions;
        const ingredient = getIngreAndMeas(data[i]);
        const image = data[i].strMealThumb;
        const tag = getTags(data[i].strTags);
        const createdBy = "TheMealDB";

        const newRecipe = {
            meal: meal,
            category: category,
            area: area,
            instruction: instruction,
            ingredient: ingredient,
            image: image,
            tag: tag,
            createdBy: createdBy,
        };
        recipes.push(newRecipe);
    }
    return recipes;
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
