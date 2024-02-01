/* Module for handling specific requests/routes for stock data */
const provider = require('./data-provider.js');
const stocks = provider.data;


// error messages need to be returned in JSON format
const jsonMessage = (msg) => {
    return { message : msg };
};

const handleAllArtists = (app) => {
    app.get('/api/artists', (req,resp) => { resp.json(stocks) } );
};

const handleSingleArtistsId = (app) => {
    app.get('/api/artists/:id', (req,resp) => {
        
        const id = req.params.id;
        
        // search the array of objects for a match
        const matches = stocks.find(obj => obj.ArtistID == id);
        
        if (matches) {
            resp.json(matches);
        
        }else{
            resp.json(jsonMessage(`ArtistID ${id} not found`));  
        }
        
    })
};


const handleArtistsNationality = (app) => {
    app.get('/api/artists/nationality/:value', (req,resp) => {
        

         // change user supplied nationality to lower case
         const nationalityToFind = req.params.value.toLowerCase();

        // search the array of objects for a match
        const matches = stocks.filter(obj => nationalityToFind === obj.Nationality.toLowerCase());

        if (matches.length > 0) {
            resp.json(matches);
        
        }else{
            resp.json(jsonMessage(`Nationality name ${nationalityToFind} not found`));  
        }
        
    })
};

const handleArtistsLastNameSearch = (app) => {
    app.get('/api/artists/name/:value', (req,resp) => {
        

         // change user supplied nationality to lower case
         const lastNameToFind = req.params.value.toLowerCase();

        // search the array of objects for a match
        const matches = stocks.filter((obj) => obj.LastName.toLowerCase().startsWith(lastNameToFind));

        if (matches.length > 0) {
            resp.json(matches);
        
        }else{
            resp.json(jsonMessage(`No last name found for  ${lastNameToFind}`));  
        }
        
    })
};




module.exports = {
    handleAllArtists,
    handleSingleArtistsId,
    handleArtistsNationality,
    handleArtistsLastNameSearch
   }; 