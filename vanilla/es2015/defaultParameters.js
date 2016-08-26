'use strict';

function greet (name = 'Alex', timeOfDay = 'day') {
  console.log(`Good ${timeOfDay}, ${name} !`);
}

greet();
greet('John');
greet(undefined, 'night');
