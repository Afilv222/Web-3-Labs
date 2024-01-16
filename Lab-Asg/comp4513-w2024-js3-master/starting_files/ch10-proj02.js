
import {Play,Act,Scene}  from "./play-module.js";

document.addEventListener("DOMContentLoaded", function() {

	
	const url = 'http://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/play.php';

   document.querySelector('#playList').addEventListener('change', fetchContent)

   
   
   function fetchContent(event){
      
      let newurl = url

      if (event.target != 0) {
         newurl += `?name=${event.target.value}`
         
         fetch(newurl)
         .then(response => response.json())
         .then(shakespeareContent)
         .then(playContent)
         .then(actContent)
         .then(sceneContent)
         .catch(error => console.error(error));

      } 

   }

   function shakespeareContent(data){
      return data   
   }

   function playContent(data){

      const play = data.acts
      const act = play.map(scene => scene.scenes)
      const scene = act.map(a => {
         a.forEach(speech => {
            speech.name
         })
      })

      console.log(play)
      console.log(act)
      console.log(scene)


      return new Play(data.acts)  
   }

   function actContent(play){
      
      //console.log(play.act)
      return data.map(scene => new Act(scene.scenes))
   }
   
   function sceneContent(data){
      //console.log(data.map(speech => speech.speeches))
      return data.map(speech => new Scene(speech.speeches))
   }

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