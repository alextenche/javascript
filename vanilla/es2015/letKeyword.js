'use strict';

const person = {
    name: "Alex Tenche",
    role: "js entuziast"
}

function personDescription(person) {
    let description = person.name;
    if (person.role) {
      description += " is a ";
      description += person.role;
    }
    console.log(description);
}

personDescription(person);


const buttons = ['button 1', 'button 2', 'button 3', 'button 4', 'button 5', 'button 6', 'button 7', 'button 8', 'button 9'];

var i = 5;

for (let i = 0; i < buttons.length; i += 1) {
  const button = buttons[i];
  console.log(button);
}
