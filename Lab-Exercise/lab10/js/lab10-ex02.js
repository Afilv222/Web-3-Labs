document.addEventListener("DOMContentLoaded", function() {
// Classes are just syntactical sugar, meaning that your Color class is simply an alternate way
// of creating a function constructor with prototype functions.
/*
class Color {
   constructor(name, hex, rgb) {
   this.name = name;
   this.hex = hex;
   this.rgb = rgb;
   }
   
   luminance() {
   let r = this.rgb[0];
   let g = this.rgb[1];
   let b = this.rgb[2];
   return 0.2126*r + 0.7152*g + 0.0722*b;
   }
} 
*/     

// function constructor for Color objects
function Color(name, hex, rgb) {
   this.name = name;
   this.hex = hex;
   this.rgb = rgb;
} 

function createBox(hex,luminance) {
   const div = document.createElement('div');
   div.classList.add('box');
   div.style.backgroundColor = hex;
   div.textContent = luminance.toFixed(2);
   
   //black text is difficult to read against a dark background
   if (luminance < 80) 
      div.style.color = 'white'; 
   
      document.querySelector("#list").appendChild(div);
  }

// simple luminosity formula from https://en.wikipedia.org/wiki/Relative_luminance
// a more accurate version would linearize the rgb first: see https://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color)
// add your prototype code here ...
Color.prototype.luminance = function () {
   let r = this.rgb[0];
   let g = this.rgb[1];
   let b = this.rgb[2];
   return 0.2126*r + 0.7152*g + 0.0722*b;
  }

// add you prototype testing code here ...
const light = new Color("light", "#f2f1e6", [250,247,230] );
console.log( light.luminance() );
const mid = new Color("mid", "#aba798", [171,167,152] );
console.log( mid.luminance() );
const dark = new Color("dark", "#231f20", [45,31,32] );
console.log( dark.luminance() ); 
// add your class definition here ...

// precreated array of colors
const colors =  [
   new Color("Abaddon Black", "#231f20", [35,31,32] ),
   new Color("Abaidh White", "#f2f1e6", [242,241,230] ),
   new Color("Abbey", "#4c4f56", [76,79,86] ),
   new Color("Abbey Stone", "#aba798", [171,167,152] ),
   new Color("Dark Strawberry", "#80444c", [128,68,76] ),
   new Color("Dark Tan", "#918151", [145,129,81] ),
   new Color("Dark Tangerine", "#ffa812", [255,168,18] ),
   new Color("Fjord Blue", "#007290", [0,114,144] ),
   new Color("Flame Scarlet", "#cd212a", [205,33,42] ),
   new Color("Flamenco", "#ea8645", [234,134,69] ),
   new Color("Honey Flower", "#5c3c6d", [92,60,109] ),
   new Color("Honey Fungus", "#d18e54", [209,142,84] ),
   new Color("Light Sage", "#bcecac", [188,236,172] ),
   new Color("Light Salmon", "#fea993", [254,169,147] ),
   new Color("Mirage Blue", "#636c77", [99,108,119] ),
   new Color("Out of Blue", "#c0f7db", [192,247,219] ),
   new Color("Outer Space", "#414a4c", [65,74,76] ),
   new Color("Outrageous Orange", "#ff6e4a", [255,110,74] ),
   new Color("Quaking Grass", "#bbc6a4", [187,198,164] ),
   new Color("Quantum Blue", "#6e799b", [110,121,155] ),
   new Color("Raspberry Patch", "#a34f66", [163,79,102] ),
   new Color("Santa Fe Sunrise", "#cc9469", [204,148,105] )
];


// add loop here

colors.forEach( (c) => {
   console.log(c.name, c.luminance());
  });

colors.forEach( (c) => {
   createBox(c.hex, c.luminance());
  }); 
   
   
});