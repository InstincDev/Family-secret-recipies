import express from "express";
import cors from "cors";
import cookieSession from "cookie-session";
import passport from "passport";
import "dotenv/config"
import  "./Passport.js" ;
import Connection from "./database/db.js";
import mealRouter from "./Routes/newMeal.js";
import seedRouter from "./Routes/seedDB.js";

import authRouter from "./Routes/auth.js"

const server = express()
const PORT = process.env.PORT || 7575

//loading static assets
server.use(express.static("../public"));

// Middleware
server.use(cookieSession(
    {name: "session",
    keys:["recipe"],
    maxAge: 24*60*60*1000}
));
server.use(passport.initialize());
server.use(passport.session());
server.use(express.urlencoded({extended:true}))
server.use(express.json())
server.use(cors({
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
}));

// Routes

server.use("/seed", seedRouter);
server.use("/recipe", mealRouter);
server.use("/auth", authRouter)

server.get('/health', (req, res) => {
    res.json({ hello: 'world' })
    })

// PORT Listen 
server.listen(PORT, ()=>{
    console.log(`Port is cooking on ${PORT}`)
    Connection()
})

