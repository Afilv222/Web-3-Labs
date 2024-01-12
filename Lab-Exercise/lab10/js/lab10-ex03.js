// import required info from your module
//import getSampleColors from "./color.js";
//import { getSampleColors } from "./color.js";
import * as colors from "./color.js";

document.addEventListener("DOMContentLoaded", () => {
   
   const container = document.querySelector("#list");
   
   colors.getSampleColors().forEach( (c) => {
      //console.log(c)
      c.createBox(container);
   });

   
});
