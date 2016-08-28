'use strict';

let webDevs = [
  { name: 'Alex', skill: 'html', rating: 9 },
  { name: 'Sebi', skill: 'html', rating: 5 },
  { name: 'Alexone', skill: 'cisco', rating: 6 },
  { name: 'Vona', skill: 'office', rating: 10 },
  { name: 'Alecu', skill: 'social', rating: 9 }
];

for (let webDev of webDevs) {
  console.log(webDev.name);
  if (webDev.name === 'Alexone') {
    console.log(webDev.rating);
    break;
  }
}
