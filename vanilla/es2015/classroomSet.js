'use strict';

let classroom = new Set();

let alexT = { name: 'Alex', age: 38 },
   sarahB = { name: 'Sarah', age: 23 },
    alexS = { name: 'Alex', age: 38 };

classroom.add(alexT);
classroom.add(sarahB);
classroom.add(alexS);
classroom.add(sarahB);

console.log(classroom);

if (classroom.has(alexT)) {
  console.log('Alex is in the classroom');
}

if (classroom.has(sarahB)) {
  console.log('Sarah is in the classroom');
}

if (classroom.has(alexS)) {
  console.log('Alex S is in the classroom');
}

console.log('classroom size: ' + classroom.size);

classroom.delete(alexT);
console.log('classroom size: ' + classroom.size);

let arrayOfStudents = Array.from(classroom);
console.log(arrayOfStudents);

let newClassroom = new Set(arrayOfStudents);
console.log(newClassroom);
