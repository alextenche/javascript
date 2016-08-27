'use strict';

let parentObject = {
  title: 'Super Important',
  childObject: {
    title: 'Equaly Important'
  }
}

let { title, childObject: { title: childTitle } } = parentObject;

console.log(childTitle);
