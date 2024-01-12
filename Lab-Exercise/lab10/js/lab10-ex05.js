// before you start, view this url in the browser to see its structure
// if HTTPS certificate has expired, then change protocol from https to http
const url = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/continents.php';

document.addEventListener("DOMContentLoaded", function() {
    
    // fetch the continents from the api in url
    // To simplify the code for explanatory purposes, we are simplifying the error handling
    
    fetch(url)
        .then( (resp) => resp.json() )
        .then( data => { 
            displayContinents(data) 
            clickContinents()
        } )
        .catch(error => console.error(error));

    function displayContinents(continents) {
        
        const list = document.querySelector('.box ul');
        console.log('During Fetch')
        for (let c of continents) {
            const item = document.createElement('li');
            item.textContent = c.name;
            list.appendChild(item);
        }

        } 
    function clickContinents(){
        
        const items = document.querySelectorAll('.box ul li');
        console.log(items);
        
        for (let li of items) {
            li.addEventListener('click', (e) => {
            console.log(e.target.textContent);
            })
        }
    }

    // this doesn't work ... why not?
    /*
        let fetchedData;
        fetch(url)
            .then( (resp) => resp.json() )
            .then( data => {
            // save fetched data in global variable
            fetchedData = data;
            console.log('got the data'); 

            })
            .catch(error => console.error(error));

        // this looks like it should work but it doesn't
        console.log('after fetch');
        console.log(fetchedData); 
        displayContinents(fetchedData);
    */
});