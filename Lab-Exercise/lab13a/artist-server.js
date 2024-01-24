const fs = require('fs'); 
const path = require('path'); 
const express = require('express'); 


// create an express app 
const app = express(); 

//const stocks = require('./scripts/data-provider.js');
//const provider = require('./scripts/data-provider.js');
//const stocks = provider.data; 




//app.use('/static',express.static(path.join(__dirname,'')));

// set up route handling
const router = require('./scripts/artist-router.js');
router.handleAllArtists(app);
router.handleSingleArtistsId(app);
router.handleArtistsNationality(app);
router.handleArtistsLastNameSearch(app);





// Use express to listen to port
let port = process.env.PORT; 

app.listen(port, () => {
console.log("Server running at port= " + port);
});