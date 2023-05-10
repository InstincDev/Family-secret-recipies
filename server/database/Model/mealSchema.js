import mongoose from 'mongoose';
const { Schema } = mongoose;

const mealSchema = new Schema({
    meal: String,
    drinkAlternate: String,
    Category: String,
    Area: String,
    Instructions: String,
    CreatedBy: String
});

const meal = mongoose.model('meal', mealSchema)

export default meal;