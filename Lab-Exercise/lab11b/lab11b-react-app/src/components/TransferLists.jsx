import { useState } from 'react';
import TutorialHeader from './TutorialHeader.jsx';
import TransferColumn from './TransferColumn.jsx'; 

const TransferLists = (props) => {
   // starting data
   const movies = [
      { "id": 13, "title": "American Beauty" },
      { "id": 14, "title": "Be Cool" },
      { "id": 48, "title": "The Hateful Eight"},
      { "id": 102, "title": "A Beautiful Mind"},
      { "id": 212, "title": "Jaws"},
      { "id": 229, "title": "The Wild Bunch"},
      { "id": 306, "title": "Gangs of New York"},
      { "id": 352, "title": "Diamonds Are Forever"},
      { "id": 399, "title": "The Last of the Mohicans"}
   ];
   
   //This uses the hooks approach to define two state variables: one to keep track of the movies in
   //the source column, and one for movies in the destination column. In this case, all the movies
   //are added to the source array, while the destination array is initially simply an empty array.
   const [source, setSource] = useState(movies);
   const [destination, setDestination] = useState([]);

   // responsible for moving a movie from source to destination
   const moveFromSourceToDestination = (id) => {

      // first find movie to move
      const movieTo = source.find (m => m.id == id);
      // create new array which doesn't contain that movie
      const newSource = source.filter( m => m.id != id );
      // update source state
      setSource(newSource);
      // add movie to destination
      destination.push(movieTo)
      // update destination source
      setDestination(destination);
   };

   // responsible for moving a movie from destination to source
   const moveFromDestinationToSource = (id) => {
      const movieTo = destination.find (m => m.id == id);
      const newDest = destination.filter( m => m.id != id );
      setDestination(newDest);
      source.push( movieTo)
      setSource(source);
   }; 

   return (      
      <main >
         <TutorialHeader subtitle="Component Data Flow"/>
         <TransferColumn data={source} update={moveFromSourceToDestination} />
         <TransferColumn heading="Destination" data={destination} update={moveFromDestinationToSource}  /> 
         <article className="columns">

         </article>        
      </main>      
   );
   
}

export default TransferLists;