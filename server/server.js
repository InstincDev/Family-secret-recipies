import express from 'express'
import bp from 'body-parser'

const app = express();
const PORT = process.env.PORT || 3000

//loading static asssets
app.use(express.static("../public"))

app.use(bp.json());
app.use(bp.urlencoded({extended: false}))

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})