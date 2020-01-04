const express = require('express')
const route = express.Router()
const bodyParser = require('body-parser');

route.use(bodyParser.urlencoded({ extended: true }));

route.get('/',(req,res) =>{
    res.send("aaaaaaaaaaaaaaaaaaaaaaaameme")
})

route.get('/:id',(req,res) =>{
    res.send("itzameme + mememnum")
})

route.delete('/:id',(req,res) =>{
    res.send("aaaaaaaaaaaaaaaaaaaaaaaameme")
})

route.post('/', (req, res) => {
    console.log('Got body:', req.body);
})


module.exports = route