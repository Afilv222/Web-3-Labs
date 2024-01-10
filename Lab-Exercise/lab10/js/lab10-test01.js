const stocks = [ 
   {symbol: "AMZN", name: "Amazon", price: 23.67, units: 59}, 
   {symbol: "AMT", name: "American Tower", price: 11.22, units: 10}, 
   {symbol: "CAT", name: "Caterpillar Inc", price: 9.00, units: 100}, 
   {symbol: "APPL", name: "Amazon", price: 234.00, units: 59}, 
   {symbol: "AWK", name: "American Water", price: 100.00, units: 10}
 ];

 // your solutions here

 // #1

 for(let stock of stocks){
  stock['total'] = stock['price'] * stock['units'];  
}

console.log('For of loop')
console.log(stocks)

stocks.forEach(stock => stock['total'] = stock['price'] * stock['units'])

console.log('For each loop')
console.log(stocks)

//  #2

const findCatSymbol = stocks.find( stock => stock['symbol'] == 'CAT')
console.log(findCatSymbol)

for(let s of stocks){
  if (s['symbol'] == 'CAT')
     console.log(s)
}

// #3
const price = stocks.filter(stock => stock['price'] >= 10 && stock['price'] <= 25)
console.log(price)





// #4 
const stockNameList = stocks.map( s => `<li>${s['name']}</li>`);
console.log('Map')
console.log(stockNameList)


const stockName = [] 

for (let i = 0; i < stocks.length; i++) {
  stockName.push(`<li>${stocks[i]['name']}</li>`);
}
console.log('For loop')
console.log(stockName)




