const express = require('express')
const route = express.Router()

route.get('/', (req,res) => {
    //Zwrot memuw
    res.send("memy hahahahahahah")
})


module.exports = route