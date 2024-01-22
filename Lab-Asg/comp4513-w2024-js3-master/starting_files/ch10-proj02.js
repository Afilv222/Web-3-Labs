
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
         setPersonaFilter()
         setPlayContent(e)
      }
     })

   })

   document.querySelector('#sceneList').addEventListener('change', (e) =>{
      setPlayContent(e)
      setPersonaFilter()
      document.querySelector('#txtHighlight').value = ''

   })

   document.querySelector('#btnHighlight').addEventListener('click', (e) =>{
      setPlayContent(e)

      if(document.querySelector('#txtHighlight').value != 0){
         highlightWord(document.querySelector('#txtHighlight').value)
      }

   })
   


   function getSpeech(e){
      
      const currSpeech = playClass.getPlayActSceneSpeech(document.querySelector('#actList').value,document.querySelector('#sceneList').value)
      const playerValue =  document.querySelector('#playerList').value 
      
      if(e.target.id == 'btnHighlight'){
         return currSpeech.filter(s => s.speaker === playerValue)
      }else{
         return currSpeech
      }

   }


   async function getData(api){
      const response = await fetch(api);
      
      const data = await response.json();

      return data;
   }


   async function fetchContent(event){
      
      let newurl = url

      if (event.target.value != 0) {
         newurl += `?name=${event.target.value}`
         
         const data = await getData(newurl);

         playClass = new Play(data)

         defaultActFilter()
         defaultSceneFilters()
         setPersonaFilter()
         setPlayContent(event) 
         
         
      }


   }
   
   function defaultActFilter(){
      document.querySelector('#actList').replaceChildren()
      
      playClass.act.forEach(a => {
         const actList = document.querySelector('#actList')
         const option = document.createElement('option')
          option.value = a.name;
          option.textContent = a.name;
          actList.appendChild(option);
      });

   }

   function setSceneFilter(currentAct){
       
      document.querySelector('#sceneList').replaceChildren()

      currentAct.scene.forEach(s => {
         const sceneList = document.querySelector('#sceneList')
         const option = document.createElement('option')
         // option.value = c.;

          option.textContent = s.name;
          sceneList.appendChild(option); 
      })
   
   }

   function setPersonaFilter(){
      let playerList = document.querySelector('#playerList')
      let option = document.createElement('option')

      document.querySelector('#playerList').replaceChildren()
      option.value = 0 
      option.textContent = 'All Players'

      playerList.appendChild(option);
      
      playClass.persona.forEach(p => {
         playerList = document.querySelector('#playerList')
          option = document.createElement('option')

         option.textContent = p.player;
         playerList.appendChild(option);
      })
   }

   function defaultSceneFilters(){
       
         document.querySelector('#sceneList').replaceChildren()

         playClass.act[0].scene.forEach(s => {
            const sceneList = document.querySelector('#sceneList')
            const option = document.createElement('option')
            // option.value = c.;

             option.textContent = s.name;
             sceneList.appendChild(option); 
         })
      
   }
  

   function highlightWord(targetWord) {
      const paragraphs = document.querySelectorAll('.speech p');
      paragraphs.forEach(function(paragraph) {

         if(paragraph.textContent.toLowerCase().includes(targetWord.toLowerCase())){
            const startIndex = paragraph.textContent.indexOf(targetWord.toLowerCase());

            if (startIndex !== -1) {
               const bold = document.createElement("b");
             
               const  boldText = document.createTextNode(targetWord.toLowerCase());
         
               // Split the paragraph's text content into two parts
               const beforeBoldText = paragraph.textContent.substring(0, startIndex);
               const afterBoldText = paragraph.textContent.substring(startIndex + boldText.length);

               // Create a text node for the text before the bold part
               const beforeTextNode = document.createTextNode(beforeBoldText);

               // Create a text node for the text after the bold part
               const afterTextNode = document.createTextNode(afterBoldText);

               // Replace the original text content with the new structure
               // Clear the existing text content
               paragraph.textContent = '';
               paragraph.appendChild(beforeTextNode); 
               bold.appendChild(boldText); 
               paragraph.appendChild(bold); 
               paragraph.appendChild(afterTextNode); 
             }
         }
           
      });
  }


   function setPlayContent(e){
     
      document.querySelector('#playHere').replaceChildren()

      const currAct = document.querySelector('#actList').value
      const currScene = document.querySelector('#sceneList').value
      const playHere = document.querySelector('#playHere')
      const playTitle = document.createElement('h2')
      playTitle.textContent = playClass.title
      const actHere = document.createElement('article')
      actHere.id = 'actHere'
      const h3 = document.createElement('h3')
      
      const sceneHere = document.createElement('div')
      sceneHere.id = 'sceneHere'
      
      const h4 = document.createElement('h4')

      const sceneTitle = document.createElement('p')
      sceneTitle.className = 'title'

      const stageDirection = document.createElement('p')
      stageDirection.className = 'direction'

         
      h3.textContent = playClass.getActName(currAct)
      h4.textContent = playClass.getPlayActSceneName(currAct,currScene)
      sceneTitle.textContent = playClass.getPlayActSceneTitle(currAct,currScene)
      stageDirection.textContent = playClass.getPlayActSceneStage(currAct,currScene)

      actHere.appendChild(h3)
      actHere.appendChild(sceneHere)
      sceneHere.appendChild(h4)
      sceneHere.appendChild(sceneTitle)
      sceneHere.appendChild(stageDirection)

      getSpeech(e).forEach(s =>{
         
         const speech = document.createElement('div')
         speech.className = 'speech'

         const span = document.createElement('span')
         span.textContent = s.speaker
         
         speech.appendChild(span)
         
         s.lines.forEach(line => {
            const p = document.createElement('p')
            p.textContent = line
            speech.appendChild(p)
         })
         if('stagedir' in s){
            const em = document.createElement('em')
            em.textContent = s.stagedir
            speech.appendChild(em)
         }

         sceneHere.appendChild(speech)
      })



         playHere.appendChild(playTitle)
         playHere.appendChild(actHere)
   }
});