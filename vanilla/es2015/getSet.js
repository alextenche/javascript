'use strict';

class Student {
  constructor ({ firstName, lastName, age, intrestLevel = 5 } = {}) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.intrestLevel =  intrestLevel;
    this.grades = new Map();
  }
}
