// import required info from your module
import getSampleColors from "./color";

document.addEventListener("DOMContentLoaded", () => {
   
   const container = document.querySelector("#list");
   
   getSampleColors().forEach( (c) => {
      c.createBox(container);
   });

   
});
