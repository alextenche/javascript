'use strict';

class Student {

  get name () {
    return `${this.firstName} ${this.lastName}`;
  }

  set name (input) {
    let name = input.split(' ');
    this.firstName = name[0];
    this.lastName = name[1];
  }

  constructor ({ firstName, lastName, age, intrestLevel = 5 } = {}) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.intrestLevel =  intrestLevel;
    this.grades = new Map();
  }
}

let alexT = new Student({ firstName: 'Alexandru', lastName: 'Tenche', age: 38 });

console.log(alexT.name);

alexT.name = 'Alex Tenche';
console.log(alexT.name);
