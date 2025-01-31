document.addEventListener("DOMContentLoaded", function() {
   // if HTTPS certificate has expired, then change protocol from https to http
   const countryAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/countries.php';
   const cityAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/cities.php?iso=';

   const button = document.querySelector("#fetchButton");
   const filters = document.querySelector("#filters");
   const select1 = document.querySelector("#countries");
   const select2 = document.querySelector("#cities");
   filters.style.display = "none";
   select2.style.display = "none";    


   // You can do this with anonymous function button.addEventListener('click', async () => {
   button.addEventListener('click', displayCountries);
   

   /*
   function displayCountries() {
      fetch(countryAPI)
         .then( resp => resp.json() )
         .then( countries => {
            filters.style.display = "block";  
            countries.forEach( c => {
               const opt = document.createElement('option');
               opt.setAttribute('value',c.iso );
               opt.textContent = c.name;
               select1.appendChild(opt);
            });
            // add a listener to the select
            select1.addEventListener('input', displayCities);
         })
   }
   */
   
   async function getCountryData() {
      const response = await fetch(countryAPI);
      console.log('after first await'); 
      const data = await response.json();
      console.log('after second await')
      return data;
   }
   /*
   function displayCountries() {
      
      console.log('before getCountryData'); 
      const countries = getCountryData();
      filters.style.display = "block";
      console.log('after getCountryData'); 

      
      countries.forEach( c => {
         const opt = document.createElement('option');
         opt.setAttribute('value',c.iso );
         opt.textContent = c.name;
         select1.appendChild(opt);
      });

       // add a listener to the select
      select1.addEventListener('input', displayCities);
     }
   */
  
   //// You can do this with anonymous function button.addEventListener('click', async () => {
   async function displayCountries() {
      try { 
         const countries = await getCountryData();
      
         filters.style.display = "block";

         countries.forEach( c => {
            
            const opt = document.createElement('option');
            opt.setAttribute('value',c.iso );
            opt.textContent = c.name;
            
            select1.appendChild(opt);
         });

         select1.addEventListener('input', displayCities);
      }
      catch (err) {
         console.error(err);
      } 
   } 

   function displayCities() {
      const iso = select1.value;
      fetch(cityAPI + iso)
         .then( resp => resp.json() )
         .then( cities => {
            select2.style.display = "block"; 
            cities.forEach( c => {
               const opt = document.createElement('option');
               opt.textContent = c.name;
               select2.appendChild(opt);
            });
         })
   }   


});