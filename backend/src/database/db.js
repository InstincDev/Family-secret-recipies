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
 }

export default Connection;