const stocks = [ 
   {symbol: "AMZN", name: "Amazon", price: 23.67, units: 59}, 
   {symbol: "AMT", name: "American Tower", price: 11.22, units: 10}, 
   {symbol: "CAT", name: "Caterpillar Inc", price: 9.00, units: 100}, 
   {symbol: "APPL", name: "Amazon", price: 234.00, units: 59}, 
   {symbol: "AWK", name: "American Water", price: 100.00, units: 10}
 ];
 // your solutions here

// console.log("1a. add total")
// for (stock of stocks) {
//   stock.total = Math.round((stock.price * stock.units)*100)/100;
// }


console.log("1b. Add total using forEach")
stocks.forEach(stock => {
  stock.total = Math.round((stock.price * stock.units)*100)/100;
});

console.log(stocks)




console.log("2a. Find the first 'CAT' using a loop");
stocks.forEach(stock => {
  if(stock.symbol == "CAT") {
    console.log(stock);
  }
});


console.log("2b. Find the first instance of 'CAT' using find()");
console.log(stocks.find(stock => stock.symbol == "CAT"));




console.log("3a. Filter the array with a for loop")
let filteredLoopedStocks = [];

for(stock of stocks) {
  if(stock.price <= 25 && stock.price >= 10) {
    filteredLoopedStocks.push(stock);
  }
}
console.log(filteredLoopedStocks);


console.log("3b. Filter the array with the filter() function")
let filteredStocks = stocks.filter(stock => stock.price <= 25 && stock.price >= 10);
console.log(filteredStocks);




console.log("4a. Make a new array of string <li> elements (for loop)");

let stockListLoop = [];

for(stock of stocks) {
  stockListLoop.push(`<li>${stock.name}</li>`)
}
console.log(stockListLoop);


console.log("4b. Make a new array of string <li> elements (map)");

const stockListMap = stocks.map(stock => {
  return `<li>${stock.name}</li>`;
})
console.log(stockListMap);