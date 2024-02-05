"use strict";
const years = [1970, 1980, 1990];
years.push(2000);
const artist = ["Picasso", "Spain", 1881];
console.log(artist[0]);
//artist[0] = "Randy"; 
const a1 = {
    name: "Picasso",
    nationality: "Spain",
    birth: 1881
};
console.log(a1.name);
//a1.name = 234;
//Notice that you can not add properties at runtime to existing objects in TypeScript
//a1.death = 1973;
let a2 = {
    name: "Raphael",
    nationality: "Italy",
    birth: 1483
};
console.log(a2.name);
const a3 = {
    name: "Picasso",
    nationality: "Spain",
    birth: 1881
};
function output(a) {
    console.log(`${a.name} (${a.birth})`);
}
const a4 = {};
output(a3);
const p1 = {
    medium: "Oil",
    base: "Canvas"
};
const p2 = {
    material: "Marble",
    height: 1.4
};
console.log(p2.material);
const foo = {
    name: "Madonna Enthroned",
    year: 1310,
    artist: {
        name: "Giotto",
        nationality: "Italy",
        birth: 1266
    },
    medium: "Tempura",
    base: "Wood"
};
console.log(foo.name + " by " + foo.artist.name);
