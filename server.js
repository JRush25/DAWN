const bodyParser = require("body-parser");
const express = require("express");
const cors = require('cors');
const app = express()

//Puerto
app.listen(3000)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));
app.use(cors());
app.get('/juegos',async(req,res)=>{
    try{
        const data = require("./startbootstrap-grayscale-gh-pages/datos/datos.json")
        res.json(data)
    } 
    catch{
        console.log("Error")
    } 
})
