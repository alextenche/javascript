function diceRoll(){
  var randomNumber = Math.floor(Math.random() * this.sides) + 1;
  return randomNumber;
}

function Dice(sides){
  this.sides = sides;
  this.roll: diceRoll
}

var dice = new Dice(6);
var dice10 = new Dice(10);

console.log(dice.roll === dice10.roll);
