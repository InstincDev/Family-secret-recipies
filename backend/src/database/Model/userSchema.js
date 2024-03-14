import mongoose from 'mongoose';
const { Schema } = mongoose;


const userSchema = new Schema({
    userName: {type:String, required: true},
    userId: {type:String, required: true},
    photo: {type:String },
    
});

const user = mongoose.model('User', userSchema)

export default user
