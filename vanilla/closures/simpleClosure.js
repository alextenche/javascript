'use strict'

function makeCounter(animal){
  var count = 0;
  return function (){
    count += 1;
    return count + ' ' + animal;
  }
}

var birdCounter = makeCounter("birds");
var dogCounter = makeCounter("dogs");

console.log(birdCounter());
console.log(birdCounter());

console.log(dogCounter());
console.log(dogCounter());
