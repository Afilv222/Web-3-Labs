document.addEventListener("DOMContentLoaded", function() {
   // if HTTPS certificate has expired, then change protocol from https to http
   const countryAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/countries.php';
   const cityAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/cities.php';
   const continentAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/continents.php';
   const userAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/users.php';
   const photoAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/images.php';
   const imageURL = 'https://www.randyconnolly.com/funwebdev/3rd/images/travel/square150/';   
   
   const continents = document.querySelector('#continents');
   const countries = document.querySelector('#countries');
   const cities = document.querySelector('#cities');
   const users = document.querySelector('#users');
   const results = document.querySelector('#results');

   function hideCountrySelection(){
      document.querySelector('#loader1').style.display = "none";
      document.querySelector('main').style.display = "none"; 
   }

   function displayCountrySelection(){
      document.querySelector('#loader2').style.display = "none";
      document.querySelector('main').style.display = "block"; 
   }

   function loadingAnimation1(){
      loader = document.querySelector('#loader1')
      loader.style.display = 'block'
      setTimeout( () => {
         loader.style.display = "none";
         displayCountrySelection()
         }, 500);

   }

   async function getData(api){
      const response = await fetch(api);
      
      const data = await response.json();

      return data;
   }

   function setContinentFilter(continent){
      //continents.replaceChildren();

      let sortedContinent = sortFilters(continent) 

      sortedContinent.forEach(c => {
         let option = document.createElement('option')
         option.value = c.code;
         option.textContent = c.name;
         continents.appendChild(option); 
      })

   }

   function setCountriesFilter(countrie){
      countries.replaceChildren();

      let sortedCountries = sortFilters(countrie) 
      
      sortedCountries.forEach(c => {
         let option = document.createElement('option')
         option.value = c.iso;
         option.textContent = c.name;
         countries.appendChild(option); 
      })

   }


   function setCitiesFilter(citie){
      cities.replaceChildren();
      
      let sortedCities = sortFilters(citie) 
      
      sortedCities.forEach(c => {
         let option = document.createElement('option')
         option.value = c.id;
         option.textContent = c.name;
         cities.appendChild(option); 
      })

   }

   function setUsersFilter(user){
      users.replaceChildren();

      let sortedUser = sortFilters(user)      

      sortedUser.forEach(u => {
         let option = document.createElement('option')
         option.value = u.id;
         option.textContent = u.lastName;
         users.appendChild(option); 
      })

   }



   function sortFilters(array){

      // This will check if at least one obj in the array has a key called name, this will return boolean value 
      const nameKeyExists = array.some(obj => obj.hasOwnProperty('name'));

      return nameKeyExists ? array.sort((a, b) => a.name.localeCompare(b.name)) : array.sort((a, b) => a.lastName.localeCompare(b.lastName))
   }


   function displayContentsFilters(){
      fetchContent()
      loadingAnimation1()
   }

   async function fetchContent(){
      try {
         
         const continentsData = await getData(continentAPI);
         const countriesData = await getData(countryAPI);
         const citiesData = await getData(cityAPI);
         const usersData = await getData(userAPI);
         const photosData = await getData(photoAPI); 

         const largePromise = Promise.all([continentsData, countriesData,citiesData,usersData,photosData])
        
        largePromise.then(results => {

            
            const [continentsData, countriesData,citiesData,usersData,photosData] = results;
            
            setContinentFilter(continentsData)
            setCountriesFilter(countriesData)
            setCitiesFilter(citiesData)
            setUsersFilter(usersData)
            //setPhotos(photosData)
        })

      } catch (error) {
         console.log(error)         
      }
   }

   //console.log(getContinentsData()) 


   hideCountrySelection()

   document.querySelector('#fetchButton').addEventListener('click', displayContentsFilters)


   
   
});