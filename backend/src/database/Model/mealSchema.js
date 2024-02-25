import mongoose from 'mongoose';
const { Schema } = mongoose;
import { ingredientSchema } from './ingredientSchema.js';

const mealSchema = new Schema({
    meal: {type:String, required: true},
    category: {type:String, required: true},
    area: {type:String },
    instructions: {type:String, required: true},
    image: {type:String },
    tag: {type:[String]},
    ingredient:{type:[ingredientSchema]},
    favorites: {type:Number, default: 0},
    users: {type:[String]},
    createdBy: {type:String}
});

const meal = mongoose.model('Meal', mealSchema)

export default meal;