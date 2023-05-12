import mongoose from 'mongoose';
const { Schema } = mongoose;

export const ingredientSchema = new Schema({
    ingredient: {type: String, require: true},
    measurement: {type: String, require: true}
});
