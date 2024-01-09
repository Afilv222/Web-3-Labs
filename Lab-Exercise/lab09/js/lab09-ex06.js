/* code goes here */


    
// illustrates one event handler for multiple events
const buttons = document.querySelectorAll(".card button");
for (let btn of buttons) {
    btn.addEventListener('click', function (e) {
        let para = e.target.previousElementSibling;
        alert(para.textContent);
    });
}

// illustrates the assigning of multiple handlers to the same object
const images = document.querySelectorAll(".card img");
for (let img of images) {
    img.addEventListener('mouseover', function (e) {
        e.target.classList.add('sepia');
    });
    img.addEventListener('mouseout', function (e) {
        e.target.classList.remove('sepia');
    });    
}    



function simpleHandler(event) {
    alert("button was clicked");
}

// illustrates a simple event handler
/*const btn = document.getElementById("firstButton");
btn.addEventListener('click', function () {
    alert("a different approach but same result");
});*/

