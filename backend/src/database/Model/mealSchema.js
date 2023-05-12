import mongoose from 'mongoose';
const { Schema } = mongoose;
import { ingredientSchema } from './ingredientSchema';

const mealSchema = new Schema({
    meal: {type:String, required: true},
    drinkAlternate: {type:String, },
    category: {type:String, required: true},
    area: {type:String, },
    instructions: {type:String, required: true},
    image: {type:String, },
    tag: {type:[String], },
    ingredient:{type: [ingredientSchema], required: true},
    createdBy: {type:String, }
});

const meal = mongoose.model('Meal', mealSchema)

export default meal;