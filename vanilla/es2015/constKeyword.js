'use strict';

const pi = 3.14159;

const name = 'Alex';

function createFullName(firstName, lastName) {
    const name = firstName + " " + lastName;
    console.log(name);
}

console.log(name);
createFullName('Alex', 'Tenche');


// const in arrays and objects
const days = ["Monday"];
const person = {firstName: "George"};

days.push("Thuesday");
console.log(days);

person.lastName = "Soros";
console.log(person);

person.lastName = "of the jungle";
console.log(person);
