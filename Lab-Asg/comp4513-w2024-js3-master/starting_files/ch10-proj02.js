

document.addEventListener("DOMContentLoaded", function() {

	
	const url = 'http://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/play.php';

   const playList = document.querySelector('#playList');
   playList.addEventListener('change',  (e) =>{ 
      let newurl = url 

      if (e.target.value != 0) {
         console.log(newurl)
         newurl += `?name=${e.target.value}`
         
         fetch(newurl)
         .then(response => response.json())
         .then(data => {console.log(data)})
         .catch(error => console.error(error));

      }
   })
   

   /*
   fetch(url)
   .then(response => response.json())
   .then(data => {console.log(data)})
   .catch(error => console.error(error));
   */




   /*
     To get a specific play, add play name via query string, 
	   e.g., url = url + '?name=hamlet';
	 
	 https://www.randyconnolly.com/funwebdev/3rd/api/shakespeare/play.php?name=hamlet
	 https://www.randyconnolly.com/funwebdev/3rd/api/shakespeare/play.php?name=jcaesar
     
   */
	 
   
    /* note: you may get a CORS error if you test this locally (i.e., directly from a
       local file). To work correctly, this needs to be tested on a local web server.  
       Some possibilities: if using Visual Code, use Live Server extension; if Brackets,
       use built-in Live Preview.
    */
});