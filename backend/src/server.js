import express from "express"
import cors from "cors"
import * as dotenv from "dotenv"
<<<<<<< HEAD
import Connection from "./database/db.js";
import mealRouter from "./Routes/newMeal.js";
import seedRouter from "./Routes/seedDB.js";
=======

>>>>>>> development

dotenv.config();

const server = express()
const PORT = process.env.PORT || 7575
<<<<<<< HEAD
//loading static assets
server.use(express.static("../public"));
=======

>>>>>>> development
// Middleware
server.use(express.urlencoded({extended:true}))
server.use(express.json())
server.use(cors())

// Routes
<<<<<<< HEAD
server.use("/seed", seedRouter);
server.use("/recipe", mealRouter);
// PORT Listen 
server.listen(PORT, ()=>{
    console.log(`Port is cooking on ${PORT}`)
    Connection()
})




=======

// PORT Listen 
server.listen(PORT, ()=>{
    console.log(`Port is cooking on ${PORT}`)
})
>>>>>>> development
