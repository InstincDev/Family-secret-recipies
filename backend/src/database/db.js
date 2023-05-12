import mongoose from "mongoose";

const Connection = async() => {
    try {
        const { MONGO_URI } = process.env;

        if (MONGO_URI === undefined) {
            throw Error("missing URI for DB connection");
        }
        await mongoose
            .set({
                strictQuery: false,
            })
            .connect(MONGO_URI);
    } catch (error) {
        console.error(error.message);
    }
    //     const MONGO_URI = process.env

//     mongoose.set('strictQuery', false);
//     mongoose.connect(MONGO_URI);

//     mongoose.connection.on('connected', () => {
//         console.log("Database connected successfully");
//     })
//     mongoose.connection.on('disconnected', () => {
//         console.log("Database Disconnected");
//     })

//     mongoose.connection.on('error', () => {
//         console.log('Error connecting the database');
//     })
 }

export default Connection;