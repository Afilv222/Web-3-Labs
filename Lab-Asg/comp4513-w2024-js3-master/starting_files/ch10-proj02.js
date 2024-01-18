
import {Play,Act,Scene} from "./play-module.js";

document.addEventListener("DOMContentLoaded", function() {

	
	const url = 'http://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/play.php';
   let playClass = null  
   let actClass = null
   let sceneClass = null

   document.querySelector('#playList').addEventListener('change', fetchContent)
   document.querySelector('#actList').addEventListener('change', (e) => {
      
    playClass.act.find(act => {
      if(e.target.value == act.name){
         console.log(document.querySelector('#actList').value)
         let s1 = document.querySelector('#sceneList').value
         console.log(act.scene.find(s => s.name == s1))
         console.log(act)
         setSceneFilter(act)
         //setPlayContent(act)
      }
     })

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

         console.log(playClass)
         defaultSceneFilters()
         defaultActFilter()
         setPlayContent(playClass) 
         
         
      }


   }
   
   function defaultActFilter(){
      document.querySelector('#actList').replaceChildren()
      
      playClass.act.forEach(a => {
          let actList = document.querySelector('#actList')
          let option = document.createElement('option')
          option.value = a.name;
          option.textContent = a.name;
          actList.appendChild(option);
      });

   }

   function setSceneFilter(currentAct){
       
      document.querySelector('#sceneList').replaceChildren()

      currentAct.scene.forEach(s => {
          let sceneList = document.querySelector('#sceneList')
          let option = document.createElement('option')
         // option.value = c.;

          option.textContent = s.name;
          sceneList.appendChild(option); 
      })
   
   }


   function defaultSceneFilters(){
       
         document.querySelector('#sceneList').replaceChildren()

         playClass.act[0].scene.forEach(s => {
             let sceneList = document.querySelector('#sceneList')
             let option = document.createElement('option')
            // option.value = c.;

             option.textContent = s.name;
             sceneList.appendChild(option); 
         })
      
   }
  
   function setPlayContent(play){
     
      document.querySelector('#playHere').replaceChildren()
      let actFirstChild = document.querySelector('#actList').firstChild.value
      let playHere = document.querySelector('#playHere')
      let playTitle = document.createElement('h2')
      playTitle.textContent = play.title
      let actHere = document.createElement('article')
      actHere.id = 'actHere'
      let h3 = document.createElement('h3')
      
      let sceneHere = document.createElement('div')
      sceneHere.id = 'sceneHere'
      
      let h4 = document.createElement('h4')

      let sceneTitle = document.createElement('p')
      sceneTitle.className = 'title'

      let stageDirection = document.createElement('p')
      stageDirection.className = 'direction'

      console.log(playClass.getFirstAct())
      
      if (actFirstChild == 'ACT I'){
         console.log(play.act.find(a => a.name == actFirstChild))
         
         h3.textContent = playClass.getFirstActName()
         h4.textContent = playClass.getPlayFirstActSceneName()
         sceneTitle.textContent = playClass.getPlayFirstActSceneTitle()
         stageDirection.textContent = playClass.getPlayFirstActSceneStage()

         actHere.appendChild(h3)
         actHere.appendChild(sceneHere)
         sceneHere.appendChild(h4)
         sceneHere.appendChild(sceneTitle)
         sceneHere.appendChild(stageDirection)

         playClass.getPlayFirstActSceneSpeech().forEach(s =>{
            
            let speech = document.createElement('div')
            speech.className = 'speech'

            let span = document.createElement('span')
            span.textContent = s.speaker
            
            speech.appendChild(span)
            
            s.lines.forEach(line => {
               let p = document.createElement('p')

               p.textContent = line
               speech.appendChild(p)
            })

            if('stagedir' in s){
               let em = document.createElement('em')
               em.textContent = s.stagedir
               speech.appendChild(em)
            }

            sceneHere.appendChild(speech)
         })

         playHere.appendChild(playTitle)
         playHere.appendChild(actHere)
         
      }
      
      //playHere.appendChild(playTitle)
      //div = classList 
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