/* Module for handling specific requests/routes for stock data */
const provider = require('./data-provider.js');
const stocks = provider.data;

// return all the stocks when a root request arrives

// error messages need to be returned in JSON format
const jsonMessage = (msg) => {
    return { message : msg };
   };

const handleAllStocks = (app) => {
    app.get('/', (req,resp) => { resp.json(stocks) } );
};

// return just the requested stock
const handleSingleSymbol = (app) => {
    app.get('/stock/:symbol', (req,resp) => {
        // change user supplied symbol to upper case
        const symbolToFind = req.params.symbol.toUpperCase();
        // search the array of objects for a match
        const matches = stocks.filter(obj => symbolToFind === obj.symbol);


        if (matches.length > 0) {
            // return the matching stock
            resp.json(matches);
            } else {
            resp.json(jsonMessage(`Symbol ${symbolToFind} not found`));
        }
    });
};
// return all the stocks whose name contains the supplied text
const handleNameSearch = (app) => {
    app.get('/stock/name/:substring', (req,resp) => {
        // change user supplied substring to lower case
        const substring = req.params.substring.toLowerCase();
        // search the array of objects for a match
        const matches = stocks.filter( (obj) =>obj.name.toLowerCase().includes(substring) );
        // return the matching stocks

        if (matches.length > 0) {
             // return the matching stocks
            resp.json(matches);
            } else {
            resp.json(jsonMessage(`No symbol matches found for ${substring}`));
        }

    });
};

module.exports = {
 handleAllStocks,
 handleSingleSymbol,
 handleNameSearch
}; 