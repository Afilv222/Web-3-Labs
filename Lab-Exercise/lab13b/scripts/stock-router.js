/* Module for handling specific requests/routes for stock data  */  

const provider = require('./stock-provider.js');
const stocks = provider.data;

// error messages need to be returned in JSON format
const jsonMessage = (msg) => {
   return { message : msg };
};

const handleCurlTest = (app) => {

   app.post('/test', (req,resp) => {
      resp.send(req.body);
      }); 
   
   //Notice that this handler will run when a PUT request is received.
   app.put('/test', (req,resp) => {
         resp.json(req.body);
      });

   app.get('/test', (req,resp) => {
      resp.send('<html><em>Testing</em></html>');
      });
   
   app.delete('/test', (req,resp) => {
      resp.send('<html><em>Delete Tested</em></html>')
      }); 
        

};


// return all the stocks when a root request arrives
const handleAllStocks = (app) => {    
   app.get('/stock', (req,resp) => { resp.json(stocks) } );
};

// return just the requested stock
const handleSingleSymbol = (app) => {
   // GET request: Retrieve data for single stock
   app.get('/stock/:symbol', (req,resp) => {
      // change user supplied symbol to upper case
      const symbolToFind = req.params.symbol.toUpperCase();
      // search the array of objects for a match
      const matches = stocks.filter(s => symbolToFind === s.symbol);
      // return the matching stock
      if (matches.length > 0) {
         resp.json(matches);
      } else {
         resp.json(jsonMessage(`Symbol ${symbolToFind} not found`));
      }
   });

   // PUT request: Update specified stock using provided data
   app.put('/stock/:symbol', (req,resp) => {
      const symbolToUpd = req.params.symbol.toUpperCase();
      // find index for stock with this symbol
      let indx = stocks.findIndex(s => s.symbol === symbolToUpd);
      // if didn't find it, then return message
      if (indx < 0) {
      resp.json(jsonMessage(`${symbolToUpd} not found`));
      } else {
      // symbol found, so replace its value with form values
      stocks[indx] = req.body;
      // let requestor know it worked
      resp.json(jsonMessage(`${symbolToUpd} updated`));
      }
   }); 


};
// return all the stocks whose name contains the supplied text
const handleNameSearch = (app) => {
   app.get('/stock/name/:substring', (req,resp) => {
      // change user supplied substring to lower case
      const substring = req.params.substring.toLowerCase();
      // search the array of objects for a match 
      const matches = stocks.filter( s => s.name.toLowerCase().includes(substring) );
      // return the matching stocks
      if (matches.length > 0) {
         resp.json(matches);
      } else {
         resp.json(jsonMessage(`No symbol matches found for ${substring}`));
      }
   });
};

module.exports = {
   handleCurlTest,
   handleAllStocks,
   handleSingleSymbol,
   handleNameSearch
};
