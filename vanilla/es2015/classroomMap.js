'use strict';

let classroom = new Map();

let alexT = { name: 'Alex', age: 38 },
   sarahB = { name: 'Sarah', age: 23 },
    alexS = { name: 'Alex', age: 38 };

classroom.set('alexT', alexT);
classroom.set('sarahB', sarahB);
classroom.set('alexS', alexS);

// console.log('classroom size: ' + classroom.size);
// classroom.clear();
// console.log('classroom size: ' + classroom.size);

if (classroom.has('alexT')) {
  console.log('Alex is in the classroom');
}

if (classroom.has('sarahB')) {
  console.log('Sarah is in the classroom');
}

if (classroom.has('alexS')) {
  console.log('Alex S is in the classroom');
}

// classroom.delete('sarahB')
// console.log('Sarah:', classroom.get('sarahB'));

for (let student of classroom) {
  console.log(`'${student[0]}' :${student[1].name} is ${student[1].age} years old`);
}
