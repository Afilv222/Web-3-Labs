

document.addEventListener("DOMContentLoaded", function() {
   // if HTTPS certificate has expired, then change protocol from https to http
   const countryAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/countries.php';
   const photoAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/images.php';
   const imageURL = 'http://www.randyconnolly.com/funwebdev/3rd/images/travel/square150';
   const countrys = [] 

   // first hide loaders and main element 
   
   function restartFilters(){
      let select = document.querySelector('#countries')
      let result = document.querySelector('#results')
      
      select.replaceChildren()
      result.replaceChildren()

   }

   function hideCountrySelection(){
      document.querySelector('#loader1').style.display = "none";
      document.querySelector('main').style.display = "none"; 
   }
   
   function loadingAnimation1(){
      loader = document.querySelector('#loader1')
      loader.style.display = 'block'
      setTimeout( () => {
         loader.style.display = "none";
         displayCountrySelection()
         }, 500);

   }

   function loadingAnimation2(){
      loader = document.querySelector('#loader2')
      loader.style.display = 'block'
      setTimeout( () => {
         loader.style.display = "none";
         displayResults()
         }, 500);

   }

   function displayCountrySelection(){
      document.querySelector('#loader2').style.display = "none";
      document.querySelector('main').style.display = "block"; 
   }
   
   function displayResults(){
      document.querySelector('#loader2').style.display = "none";
      document.querySelector('#results').style.display = "block";  
   }

   function createCountrySelections(country){
      let select = document.querySelector('#countries')

      // first remove all existing options from list
      select.replaceChildren();

      country.forEach(c => {
         let option = document.createElement('option');
         option.value = c.iso;
         option.textContent = c.name;
         select.appendChild(option); 
      });
   }

   function createCountryImages(images){
      let result = document.querySelector('#results')

      // first remove all existing options from list
      result.replaceChildren();

      images.forEach(i => {
         let img = document.createElement('img')
         img.src = `${imageURL}/${i.filename}`
         img.title = i.title 
         img.alt = i.title
         result.appendChild(img)

      })
   }
   // then handle button click 
  
  
   hideCountrySelection()

   document.querySelector('#fetchButton').addEventListener('click', (e) => {
      if(e.target.nodeName.toLowerCase() == 'button'){
         
         hideCountrySelection()
         restartFilters()

         fetch(countryAPI)
         .then(response => response.json())
         .then(createCountrySelections)
         .then(loadingAnimation1)
         .catch(error => console.error(error))


      }
    

   })


   document.querySelector('#countries').addEventListener('click',(e) =>{
      if(e.target.tagName.toLowerCase() == 'select'){
         fetch(photoAPI+`?iso=${e.target.value}`)
         .then(response => response.json())
         .then(data => {return [...data]})
         .then(createCountryImages)
         .then(loadingAnimation2)
      }
         
   })

   /* -------------------------------------------------------------
      When button is clicked, fetch data and populate select element 
   */


   /* -------------------------------------------------------------
      When user selects, fetch data and display images
   */



});