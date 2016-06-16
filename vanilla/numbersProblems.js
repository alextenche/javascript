"use strict";

console.log(0.1 + 0.2);

console.log(0.1 + 0.2 + 0.3);

var num = 0.1 + 0.2;
console.log(num.toFixed(1));

function tax (price, percent){
  return parseFloat((price*percent/100).toFixed(2));
}

console.log(tax(9.85, 7.5));
