
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
         setSceneFilter(act)
         setPlayContent()
      }
     })

   })

   document.querySelector('#sceneList').addEventListener('change', (e) =>{
      setPlayContent()
   })

   document.querySelector('#btnHighlight').addEventListener('click', (e) =>{
      console.log('hello world')
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
         //defaultSceneFilters()
         defaultActFilter()
         defaultSceneFilters()
         setPersonaFilter()
         setPlayContent() 
         
         
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

   function setPersonaFilter(){
      document.querySelector('#playerList').replaceChildren()

      playClass.persona.forEach(p => {
         let playerList = document.querySelector('#playerList')
         let option = document.createElement('option')

         option.textContent = p.player;
         playerList.appendChild(option);
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
  
   function setPlayContent(){
     
      document.querySelector('#playHere').replaceChildren()

      let currAct = document.querySelector('#actList').value
      let currScene = document.querySelector('#sceneList').value
      let playHere = document.querySelector('#playHere')
      let playTitle = document.createElement('h2')
      playTitle.textContent = playClass.title
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


      //if (actFirstChild == 'ACT I'){
         //console.log(play.act.find(a => a.name == actFirstChild))
         
         h3.textContent = playClass.getFirstActName(document.querySelector('#actList').value)
         h4.textContent = playClass.getPlayFirstActSceneName(currAct,currScene)
         sceneTitle.textContent = playClass.getPlayFirstActSceneTitle(currAct,currScene)
         stageDirection.textContent = playClass.getPlayFirstActSceneStage(currAct,currScene)

         actHere.appendChild(h3)
         actHere.appendChild(sceneHere)
         sceneHere.appendChild(h4)
         sceneHere.appendChild(sceneTitle)
         sceneHere.appendChild(stageDirection)

         playClass.getPlayFirstActSceneSpeech(currAct,currScene).forEach(s =>{
            
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
         
      //}
      
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