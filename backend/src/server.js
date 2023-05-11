import express from "express"
import cors from "cors"
import * as dotenv from "dotenv"


dotenv.config();

const server = express()
const PORT = process.env.PORT || 7575

// Middleware
server.use(express.urlencoded({extended:true}))
server.use(express.json())
server.use(cors())

// Routes

// PORT Listen 
server.listen(PORT, ()=>{
    console.log(`Port is cooking on ${PORT}`)
})