// first reference required modules
const path = require('path');
const express = require('express');

// create an express app
const app = express();

const stocks = require('./scripts/dataProvider.js');


// handle requests for static resources
const publicPath = path.join(__dirname,'public');
app.use(express.static(publicPath));


// return all the stocks when a root request arrives
app.get('/api', (req,resp) => { resp.json(stocks) } ); 

// return all the stocks when a root request arrives
app.get('/',(req,resp) => { 
		const filename = path.join(publicPath,'index.html');
		resp.sendFile(filename);
	} ); 

// Use express to listen to port
let port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Server running at port= " + port);
});
