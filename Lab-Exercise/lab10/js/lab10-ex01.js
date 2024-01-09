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
   // Sorting a simple array
   const sortedTitles = titles.sort();
   console.log(sortedTitles);

   /* Sorting an array of objects */
   // const paintingsByYear = paintings.sort( function(a, b) {
   //    if(a.year < b.year) {
   //       return -1;
   //    } else if(a.year > b.year) {
   //       return 1;
   //    } else {
   //       return 0;
   //    }
   // })

   /* This can be simplified using an arrow function and ternary operations */

   // const paintingsByYear = paintings.sort((a, b) => {
   //    return a.year < b.year ? -1 : 1;
   // });

   /* This can be further simplified */
   const paintingsByYear = paintings.sort( (a,b) => a.year < b.year );

   console.log(paintingsByYear);

   /* Creating a subset of an array */
   const nineteenthCentury = paintings.filter((painting) => painting.year >= 1800 && painting.year < 1900); 
   console.log(nineteenthCentury);

    /* To find the first instance of a condition */
   const manet = paintings.find(painting => painting.artist === "Manet");
   console.log(manet);

   /* Looping through the list of paintings */
   paintings.forEach(p => {console.log(`${p.title} by ${p.artist}`)})

   /* You cannot break out of a forEach loop */
   //    let indexBronz = 0; 
   //    paintings.forEach( p => { 
   //     if (p.artist == "Bronzino") break; 
   //     indexBronz++; 
   // }); 
   // console.log("index of Bronzino="+indexBronz);

   let indexBronz = 0; 
   paintings.forEach( (p,index) => {
      if (p.artist == "Bronzino") indexBronz = index; 
   }); 

   console.log("index of Bronzino="+indexBronz);

   /* Can do a better filter and find using regex */
   // first define regular expression pattern ('i' = case insensitive) 
   // This looking for paintings with "ea" in the title
   const re = new RegExp('ea','i'); 
   const results = paintings.filter( p => p.title.match(re) ); 
   console.log(results);

   /* using the spread operator */
   const moreTitles = ["Balcony", "Sunflowers", ...titles]; 
   console.log(`titles (${titles.length}): ${titles} \nmoreTitles (${moreTitles.length}): ${moreTitles}`); 
   // This has added the contents of the titles array (defined at the top of the file) to the end of the 
   // moreTitles array

   /* How it was done previously */
   const moreTitlesOldFashioned = ["Balcony", "Sunflowers"]; 
   for (let t of titles) { 
      moreTitlesOldFashioned.push(t); 
   } 
   console.log(moreTitlesOldFashioned);

   /* Creating an array based off another array */
   // Creates a list of artists based off the paintings array
   console.log('- create new array from existing array of objects'); 
   const artists1 = []; 
   for (let painting of paintings) { 
      artists1.push(painting.artist); 
   } 
   console.log(artists1);

   // A more concise way to do it using map()
   const artists2 = paintings.map( function (painting) { 
      return painting.artist;  
   }); 
   console.log(artists2);

   // It can be more concise with arrow functions
   const artists3 = paintings.map( painting => painting.artist ); 
   console.log(artists3);

   /* Main reason for Map is to transform an array to something else */
   console.log('- using map to transform an array'); 
   const artistList = paintings.map( p => `<li>${p.title}</li>`); 
   console.log(artistList);

   /* Using the map to create the li elements */
   const artistDOMList = paintings.map( p => { 
      const li = document.createElement('li'); 
      li.textContent = p.title; 
      li.value = p.id; 
      return li; 
   }); 
   
  const list = document.querySelector("#list"); 
  artistDOMList.forEach( li => { list.appendChild(li)});

   /* Reduce allows you to transform an array into a scalar value */
   let total = sales.reduce((subtotal,current) => subtotal + current) 
   console.log("total=" + total); 
});