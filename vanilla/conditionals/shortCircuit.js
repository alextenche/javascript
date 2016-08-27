'use strict';

console.log(3 === 3 && 'a' === 'a');

console.log(1 === 1 && 'alex' === 'alex');  // true

console.log(1 === 1 && 'cow');              // cow

console.log(1 === 1 && 'cow' && 'chicken'); // chicken

console.log(1 === 1 && false && 'chicken'); // false

1 === 1 && false && console.log('chicken'); // no output, short-circuited by false

1 === 1 && 'cow' && console.log('chicken'); // chicken

console.log(1 === 1 || 'cow' || 'chicken'); // true

console.log(1 === 2 || 'cow' || 'chicken'); // cow

console.log(1 === 2 || false || 0);         // 0 - last value


function isAdult(age){
  return age && age >= 18;
}

console.log(isAdult());     // undefined
console.log(isAdult(15));   // false
console.log(isAdult(38));   // false


function countToFive(start){
  start = start || 1;
  for (var i = start; i <= 5; i += 1) {
    console.log(i);
  }
}

countToFive();


function greet(name){
  name && console.log('hi, ' + name + '!');
}

greet('Cristina');
greet();
