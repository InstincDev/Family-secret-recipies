import {Router} from "express";
import Connection from "../database/db.js";
import Meal from "../database/Model/mealSchema.js";

const mealRouter = Router();

// Route to save a new meal
mealRouter.post("/new", async (req, res) => {

    try {
        await Connection()
        const meal = await Meal.create(req.body)
        await meal.save();
        res.status(200).json(meal)
    } catch (error) {
        console.log(error.message);
        res.status(400).send(error.message)
    }
});

mealRouter.get("/",async (req,res) =>{
    try {
        await Connection();
        const meals = await Meal.find()
        res.status(200).json(meals);
        // console.log(meals[0].meal);

    } catch (error) {
        console.log(error.message);
        res.status(400).send(error.message)
    }
})

export default mealRouter;
