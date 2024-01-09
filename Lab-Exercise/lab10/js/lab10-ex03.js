// import required info from your module


document.addEventListener("DOMContentLoaded", () => {
   

   
   
   function createBox(hex,luminance) {
      const div = document.createElement('div');
      div.classList.add('box');
      div.style.backgroundColor = hex;
      if (luminance < 80) div.style.color = 'white';
      div.textContent = luminance.toFixed(2);
      document.querySelector("#list").appendChild(div);
   }
   
});