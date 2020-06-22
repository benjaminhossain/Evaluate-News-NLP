//.env
const dotenv = require('dotenv');
dotenv.config();

//Express
const express = require('express')
const app = express()

//bp

//Cors
const cors = require('cors');
app.use(cors());

var path = require('path')

app.use(express.static('dist'))
app.use(express.json())

console.log(__dirname)

// set aylien API credentials
var aylien = require("aylien_textapi");

var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });

app.post("/addData", function (req, res) {

    textapi.sentiment({
        'url': req.body.url, 
        'mode': 'document'
    }, function (error, response) {
        if (error === null) {
            console.log(response)
            res.send(response)
        } else {
            console.log('Error: ', error)
        }
    })
})

//GET Route
app.get('/', function (req, res){
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

module.exports = app;
