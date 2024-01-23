const fs = require('fs'); 
const path = require('path'); 
const express = require('express'); 


// for now, we will get our data by reading the provided json file 
const file = 'stocks-simple.json'; 
const jsonPath = path.join(__dirname, 'data', file); 
// read file contents synchronously 
const jsonData = fs.readFileSync(jsonPath, 'utf8'); 
// convert string data into JSON object 
const stocks = JSON.parse(jsonData);

// create an express app 
const app = express(); 

// return just the requested stock 
app.get('/stock/:symbol', (req,resp) => { 
 // change user supplied symbol to upper case 
 const symbolToFind = req.params.symbol.toUpperCase(); 
 // search the array of objects for a match 
 const matches = stocks.filter(obj => symbolToFind === obj.symbol); 
 // return the matching stock 
 resp.json(matches); 
}); 