const express = require('express')
const app = express()
const port = 3000

//Routes
const home = require('./routes/home')
const memes = require('./routes/memes')

//Middleware functions
app.use(express.json())

//Setting up routes
app.use('/',home)
app.use('/api/memes',memes)

app.listen(port, () => console.log(`|I|AM|ON|PORT|${port}|!|BE|AWARE|.|`))