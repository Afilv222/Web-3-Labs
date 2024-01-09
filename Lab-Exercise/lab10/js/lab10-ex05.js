// before you start, view this url in the browser to see its structure
// if HTTPS certificate has expired, then change protocol from https to http
const url = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/continents.php';

document.addEventListener("DOMContentLoaded", function() {
    // fetch the continents from the api in url
    fetch(url) 
        .then( (resp) => resp.json() ) 
        .then( data => { 
            // create the list items based on received data 
            displayContinents(data);  

            // set up event handlers 
            const items = document.querySelectorAll('.box ul li'); 
            for (let li of items) { 
                li.addEventListener('click', (e) => { 
                    console.log(e.target.textContent); 
                }) 
            }
        }) 
        .catch(error => console.error(error));
    
        
        function displayContinents(continents) { 
            const list = document.querySelector('.box ul'); 
            
            for (let c of continents) { 
                const item = document.createElement('li'); 
                item.textContent = c.name; 
                list.appendChild(item); 
            } 
        }
});