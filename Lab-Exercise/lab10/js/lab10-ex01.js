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

   






});