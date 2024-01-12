document.addEventListener("DOMContentLoaded", function() {
    let url = 'https://api.github.com/orgs/funwebdev-2nd-ed/repos';
    
    // use fetch to request data from an API
    // Fetch returns a Promise, which is a way to handle asynchronous operations. To access the
    // data from the fetch, we have to wait until it is received, which we can do via then().
    let foo = fetch(url);
    console.log(foo); 
    

     //When fetch receives a response, it will call the callback function passed to then().Notice
     //that the actual return data is hidden in the response body and will require some additional
     //work. Notice also that the then() function also returns a promise   
     //As a result, the console.log(bar) is executed before the console.log(response).
     let bar = foo.then(response =>{
        console.log(response)
    })
    console.log(bar);
    
    //It is common to chain calls to then() together, thereby eliminating the need for additional variables.
    fetch(url)
        .then(response => {
            //While not necessary, there are occasions when you need to customize your error handling in this way.
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject({
                status: response.status,
                statusText: response.statusText
                })
            }
        })
        .then(data => {console.log(data)})
        .catch(err => {console.log('err='+err)});
    
    console.log('after the fetch')
    
});