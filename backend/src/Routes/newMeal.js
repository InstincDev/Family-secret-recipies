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
    // const meals = req.body.meal;
    // const drinkAlternates = req.body.drinkAlternate;
    // const Categorys = req.body.Category;
    // const Areas = req.body.Area;
    // const Instructionss = req.body.Instructions;
    // const CreatedBys = req.body.CreatedBy;

    // const newRecipe = new meal({
    //     meal: meals,
    //     drinkAlternate: drinkAlternates,
    //     Category: Categorys,
    //     Area: Areas,
    //     Instructions: Instructionss,
    //     CreatedBy: CreatedBys,
    // });

    // register.findOne({ meal: meals }, (err, user) => {
    //     if (user) {
    //         res.send("Recipe already present, create something new!");
    //     } else {
    //         newRecipe.save();
    //         res.status(201).send("Voila! New Recipe is uploaded successfully");
    //     }
    // });
});

mealRouter.get("/",async (req,res) =>{
    try {
        await Connection();
        const meals = await Meal.find()
        res.status(200).json(meals);
    } catch (error) {
        console.log(error.message);
        res.status(400).send(error.message)
    }
})

export default mealRouter;
