document.addEventListener('DOMContentLoaded', () => {


   const titles = ["Girl with a Pearl Earring","Artist Holding a Thistle","Portrait of Eleanor of Toledo"];
   
   const years = [1864, 1642, 1890, 1950];
   
   const sales = [23.45,45.55,14.00,57.50,66.66];
   
   const paintings = [ {id:1, title: "Girl with a Pearl Earring", artist: "Vermeer", year: 1665}, 
                     {id:2, title: "Artist Holding a Thistle", artist: "Durer", year: 1493}, 
                     {id:3, title: "Burial at Ornans", artist: "Courbet", year: 1849},
                     {id:4, title: "Sunflowers", artist: "Van Gogh", year: 1889},
                     {id:5, title: "Portrait of Eleanor of Toledo", artist: "Bronzino", year: 1544},
                     {id:6, title: "Wheatfield with Crows", artist: "Van Gogh", year: 1890},
                     {id:7, title: "Music in the Tuileries Gardens", artist: "Manet", year: 1862},
                     {id:8, title: "Balcony", artist: "Manet", year: 1868}];

   const stocks = [
      {symbol: "AMZN", name: "Amazon", price: 23.67, units: 59},
      {symbol: "AMT", name: "American Tower", price: 11.22, units: 10},
      {symbol: "CAT", name: "Caterpillar Inc", price: 9.00, units: 100},
      {symbol: "APPL", name: "Amazon", price: 234.00, units: 59},
      {symbol: "AWK", name: "American Water", price: 100.00, units: 10}
      ];
/* add code here */

   //Since titles is simply an array of strings, it can be easily sorted.
   const sortedTitles = titles.sort();
   console.log(sortedTitles); 

   // This will sort the object paintings by years, from oldest to newest 
   /*
   const paintingsSortedByYear = paintings.sort( function(a,b) {
      if (a.year < b.year)
      return -1;
      else if (a.year > b.year)
      return 1;
      else
      return 0;
     } );
    */

   // This will sort the object paintings by years, from oldest to newest but using ternary operator and arrow functions 
   const paintingsSortedByYear = paintings.sort((a,b) =>  {
      return a.year < b.year ? -1 : 1; 
   });
   console.log(paintingsSortedByYear);

   // This is using the filter function for the painting object , there should only be 5 objects in the array  
   // To create a new array that is a subset of an existing array, you can use the filter()
   const nineteenthCentury = paintings.filter(
      painting => painting.year >= 1800 && painting.year < 1900);
   
   console.log(nineteenthCentury);
   
   //To find the first element in an array that matches a criteria, you can use the find()
   const manet = paintings.find( painting => painting.artist == "Manet");
   console.log(manet);

   // This will print out all the titles with the artist 
   paintings.forEach(
      p => { console.log(p.title + " by " + p.artist) });


   // Unlike a regular for loop, you cannot break from a forEach().
   /*
   let indexBronz = 0;
   paintings.forEach( p => {
   if (p.artist == "Bronzino")
      break; 
   indexBronz++;
   });
   console.log("index of Bronzino="+indexBronz);
    */ 

   // This is better way to find the index for artist  Bronzino
   let indexBronz = 0;
   paintings.forEach( (p,index) => {
      if (p.artist == "Bronzino") 
         indexBronz = index;
         
      });
   console.log("index of Bronzino = "+indexBronz);


   // first define regular expression pattern ('i' = case insensitive),This uses regular expressions to search for all paintings whose title contains the word ‘ea’.
   const re = new RegExp('ea','i');
   const results = paintings.filter( p => p.title.match(re) );
   console.log(results);

   // using the spread operator, this will add the rest of the contents from title array into moreTitles array. This will also but the tiles array in order 
   const moreTitles = ["Balcony", "Sunflowers", ...titles];
   console.log(moreTitles);

   // The same exact result just a different way of doing it 
   const moreTitlesOldFashioned = ["Balcony", "Sunflowers"];
   for (let t of titles) {
      moreTitlesOldFashioned.push(t);
   }
   console.log(moreTitlesOldFashioned);

   // concise way of doing this is via the map() function
   const artists2 = paintings.map( painting => painting.artist);
   console.log(artists2);

   //create an array of DOM nodes that we will populate the existing <ul>
   const artistDOMList = paintings.map( p => {
      const li = document.createElement('li');
      li.textContent = p.title;
      li.value = p.id;
      return li;
      });

   const list = document.querySelector("#list");
   artistDOMList.forEach( li => { list.appendChild(li)});

   // TEST YOUR KNOWLEDGE #1

   for(let stock of stocks){
      stock['total'] = stock['price'] * stock['units'];  
   }
   console.log('For of loop')
   console.log(stocks)

   stocks.forEach(stock => stock['total'] = stock['price'] * stock['units'])
   
   console.log('For each loop')
   console.log(stocks)

   const findCatSymbol = stocks.find( stock => stock['symbol'] == 'CAT')
   console.log(findCatSymbol)

   for(let s of stocks){
      if (s['symbol'] == 'CAT')
         console.log(s)
   }

   con


});