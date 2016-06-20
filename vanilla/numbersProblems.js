"use strict";

console.log(0.1 + 0.2);

console.log(0.1 + 0.2 + 0.3);

var num = 0.1 + 0.2;
console.log(num.toFixed(1));

function tax (price, percent){
  return parseFloat((price*percent/100).toFixed(2));
}

console.log(tax(9.85, 7.5));

var mailedGlove = 9.85;
var armotTax = 7.5;
var total = mailedGlove + tax(mailedGlove, armotTax);

console.log(parseInt("88"));
console.log(parseInt("88 elephants"));
console.log(parseInt("route 88"));

console.log(parseFloat("88.88 elephants"));
console.log(parseInt("more to go 88.88"));

// problems with older browsers - thinks number is in octal
var userAge = "021";
console.log(parseInt(userAge));
console.log(parseInt(userAge, 10));

// number !
console.log(typeof NaN);

// false wow !
console.log(NaN === NaN);

// false - string
isNaN("42");

function isThisActuallyANumberDontLie(data){
  return (typeof data === "number" && !isNaN(data));
}

console.log(isThisActuallyANumberDontLie(640));
console.log(isThisActuallyANumberDontLie("640"));

function checkValidZip(){
  var entry = document.getElementById("zip").value;
  var userZip = parseInt(entry);

  try{
    if(isThisActuallyANumberDontLie(userZip)){
      if(userZip.toFixed(0).length === 5){
        return true;
      } else {
        throw new Error("Nope!");
      }
    } else {
      throw new Error("Nope!");
    }
  } catch(error){
    if(error.message === "Nope!"){
      alert("please enter a valid zip !");
      return false;
    }
    // other error responses here
  }
}
