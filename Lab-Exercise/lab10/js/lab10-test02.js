// import the module here
import * as galleries from "./gallery.js";


document.addEventListener("DOMContentLoaded", function() {
   // used the getSampleGalleries function from the gallery module
   

   // you'll be adding code to this <ul> list
   const list = document.querySelector("#galleryList");
    
   // now loop through the sample gallery data calling render and list.appendChild
   galleries.getSampleGalleries().forEach(gallery => {
      list.appendChild(gallery.render());
   });
    

});