'use strict';

class Student {
  constructor ({ name, age, intrestLevel = 5 } = {}) {
    this.name = name;
    this.age = age;
    this.intrestLevel =  intrestLevel;
    this.grades = new Map();
  }
}


let joey = new Student({ name: 'Joey', age: 30 });
let criss = new Student({ name: 'Cristina', age: 33 });

criss.grades.set('History', 'C');
criss.grades.set('Math', 'B');

console.log(joey);
console.log(criss);

console.log(Array.from(criss.grades));
