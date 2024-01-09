document.addEventListener("DOMContentLoaded", function() {
    let url = 'https://api.github.com/orgs/funwebdev-2nd-ed/repos';
    // let url = 'https://api.github.com/orgs/funwebdev-2nd-ed/repo12313s';
    
    // use fetch to request data from an API
    // let foo = fetch(url);
    // console.log(foo);

    // let bar = foo.then(res => {console.log(res)});

    fetch(url)
        .then( response => {
            if (response.ok) {                 
                return response.json();             
            } else {                 
                return Promise.reject({                     
                    status: response.status,                     
                    statusText: response.statusText                   
                })             
            }          
        })     
        .then( data  => { console.log(data); } )     
        .catch( err => { console.log('err='+err) }); 

    console.log("after the fetch");
});