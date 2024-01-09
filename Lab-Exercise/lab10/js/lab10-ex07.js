import { getPaintingData }  from "./paintings.js";
document.addEventListener("DOMContentLoaded", function() {
   
   const main = document.querySelector('main');
   const paintings = getPaintingData();
   paintings.forEach( (p) => {
      main.appendChild( p.render() );
   });
   // if HTTPS certificate has expired, then change protocol from https to http
   const url = "https://www.randyconnolly.com/funwebdev/3rd/async-post.php";

   // set up button handlers here using event delegation
   document.querySelector('main').addEventListener('click', (e) => {

   });
});