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
});

mealRouter.post("/:mealId/favorite", async (req,res) =>{
    const {mealId} = req.params;
    const user = req.user
    try {
        await Connection();
        const meal = await Meal.findById(mealId)
        
        if(user && !meal.users.includes(user.id)){
            meal.users.push(user.id)
            meal.favorites++
            await meal.save();
            
        res.json({success: true, message: "Meal favorited"})
        }
    } catch (error) {
        console.log(error.message);
        res.status(400).send(error.message)
    }
})

mealRouter.post("/:mealId/unfavorite", async (req,res) =>{
    const {mealId} = req.params;
    const user = req.user
    try {
        await Connection();
        const meal = await Meal.findById(mealId)
        
        if(user && meal.users.includes(user.id)){
            meal.users = meal.users.filter(elem => elem !== user.id )
            meal.favorites--
            await meal.save();
            res.json({success: true, message: "Meal unfavorited"})
        }
    } catch (error) {
        console.log(error.message);
        res.status(400).send(error.message)
    }
})

mealRouter.post("/:mealId/comments", async (req,res) =>{
    const {mealId} = req.params;
    const user = req.user
    try {
        await Connection();
        const meal = await Meal.findById(mealId)
        const comment = req.body.comments
        if(user){       
            meal.comments.push(comment)
            await meal.save();
            res.redirect("http://localhost:5173/recipe/"+mealId)
            // res.json({success: true, message: "New Comment"})

        }
    } catch (error) {
        console.log(error.message);
        res.status(400).send(error.message)
    }
})



export default mealRouter;
