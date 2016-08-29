'use strict';

class Bird {
  // static changeColor (color) {
  static changeColor (bird, color) {
    // this.color = color;
    bird.color = color;
  }
  constructor ({ color = 'red' } = {}) {
    this.color = color;
  }
}

let redBird = new Bird;
console.log(redBird.color);

// Bird.changeColor.call(redBird, 'blue');
Bird.changeColor(redBird, 'blue');
console.log(redBird.color);
