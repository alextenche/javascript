'use strict';

const originalFlavors = ['Chocolate', 'Vanilla'];
const newFlavors = ['Strawberry', 'Mint Chocolate Chip'];
const inventory = ['Rocky Road', ...originalFlavors, 'Neopolitan', ...newFlavors];

console.log(inventory);

function favoriteIcecream (name, icecreamFloavor) {
  console.log(`${name} really likes ${icecreamFloavor}`);
}

let args = ['Alex', 'Fragola'];
favoriteIcecream(...args);
