// A promise is a placeholder/proxy for a value that isn't available right now will be available in the future to be used. 

const randyPromise = (grade) =>{
    return new Promise ((resolve,reject) => {

        if(grade >= 60){
            resolve('You pass')
        }else{
            reject('you fail')
        }

    })

}

randyPromise(70)
.then((msg) => console.log(msg));


// What is the purpose of module in JS ? What problem do they address? 
//ANSWER
// A module is meant to add a degree of encapsaltion , so allow similar named functions to exist within an aplication without conflict. 
// Module addresses the namespace problem with JS as vanilla Js does not allow function/method overloading. 


// One of the advantages of node.js enivr is that is potential execution speed is faster and can often handle more simultaneous requests.
// Describe why this is the case. 
// ANSWER
// Node is singled threaded, meaning it handles one request with single thread at a time but when simultaneous/async request occurs 
// it takes advantage of JS type of nature it can handle thousands of concurrent connections with a single thread, making it more lightweight and efficient.

// How does MongoDb differ from mysql? What are the key benefits and drawbacks of a database system like Mongo ? 
// ANSWER
// MongoDb is document-store style nosql database where  data is stored in json like documents. While mysql is SQL databases use a structured, tabular data model. Data is organized into tables.

// Pros 
// - Easier to visualize data because its in json formate 
// - MongoDb is able to handle unlimited size of data from a process called sharding which splitting databases acoress multiple devices 
//   so bacially making them into smaller databases. 
// - Flexible Data Model, you are not set to a defined schema compared to sql tables 


// Cons
// - Compared to sql has more data consistency and intergrity 
// - Usually nosql systems are usually faster than sql system with large data but for normal to small data sql is better at handling it 
// - There is no common way to query/modify noSQL databases

