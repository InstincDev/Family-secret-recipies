import express from 'express'
import bp from 'body-parser'
import Connection from './database/db.js';
import mealRouter from './Routes/newMeal.js';

const app = express();
const PORT = process.env.PORT || 3000

//loading static asssets
app.use(express.static("../public"))

app.use(bp.json());
app.use(bp.urlencoded({extended: false}))

//Route to save new Recipies
app.use('/new/recipe', mealRouter)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
    Connection();
})