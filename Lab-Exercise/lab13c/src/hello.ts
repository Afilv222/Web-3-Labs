let msg: string = 'Hello World';
console.log(msg);

function calcTotal(subtotal: number, tax: number): number {
    return subtotal + (subtotal*tax);
   }

msg = 'Total = ';
/*
Notice that no type annotation has been provided for subtotal and yet the code still compiles
and executes. When no annotation is provided, the compiler will infer its type based on its
content.
*/
let subtotal = 200; 
let total: number = calcTotal(subtotal,0.05);
console.log(msg + total);