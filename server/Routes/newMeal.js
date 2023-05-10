import express from 'express'
import meal from '../database/Model/mealSchema.js';

const mealRouter = express.Router();


// Route to save a new meal
mealRouter.post('/new/recipe', (req, res) => {
    const meals = req.body.meal
    const drinkAlternates = req.body.drinkAlternate
    const Categorys = req.body.Category
    const Areas = req.body.Area
    const Instructionss = req.body.Instructions
    const CreatedBys = req.body.CreatedBy

    const newRecipe = new meal({
        meal: meals,
        drinkAlternate: drinkAlternates,
        Category: Categorys,
        Area: Areas,
        Instructions: Instructionss,
        CreatedBy: CreatedBys
    })

    register.findOne({ meal: meals }, (err, user) => {
        if (user) {
            res.send('Recipe already present, create something new!')
        } else {
            newRecipe.save()
            res.status(201).send("Voila! New Recipe is uploaded successfully")
        }
    })
})

export default mealRouter;