'use strict';

let Student = function (data) {
  this.name = data.name;
  this.age = data.age;
}

let joey = new Student({ name: 'Joey', age: 30 });
let criss = new Student({ name: 'Cristina', age: 33 });

console.log(joey);
console.log(criss);
