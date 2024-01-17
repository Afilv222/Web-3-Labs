
import {Play,Act,Scene} from "./play-module.js";

document.addEventListener("DOMContentLoaded", function() {

	
	const url = 'http://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/play.php';
   let playClass = null  
   let actClass = null
   let sceneClass = null

   document.querySelector('#playList').addEventListener('change', fetchContent)
   document.querySelector('#actList').addEventListener('change', (e) => {

      if(e.target.value == e.)
      
   })
   
   
   async function getData(api){
      const response = await fetch(api);
      
      const data = await response.json();

      return data;
   }


   async function fetchContent(event){
      
      let newurl = url

      if (event.target != 0) {
         newurl += `?name=${event.target.value}`
         
         const data = await getData(newurl);
         
         playClass = new Play(data)

         setSceneFilters()
         setActFilters()
         
         
      }


   }
   
   function setActFilters(){
      

      document.querySelector('#actList').replaceChildren()
      
      playClass.act.forEach(a => {
          let actList = document.querySelector('#actList')
          let option = document.createElement('option')
          option.value = a.name;
          option.textContent = a.name;
          actList.appendChild(option);
      });

   }




   function setSceneFilters(){
       
         document.querySelector('#sceneList').replaceChildren()

         playClass.act[0].scene.forEach(s => {
             let sceneList = document.querySelector('#sceneList')
             let option = document.createElement('option')
            // option.value = c.;

             option.textContent = s.scene.name;
             sceneList.appendChild(option); 
         })
      
   }
  
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