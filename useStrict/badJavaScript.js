"use strict";

// add var in strict mode
var badVariable = 10;


// add var x for strict mode;
var x;
function amIGlobal(){
  x = 10;
}

// fails in strict mode
//NaN.foobar = true;

// throws an error in strict mode
//delete Object.prototype;

// syntax error, duplicate key
var badObject = {
  zoo: "animals",
  internet: "trolls",
  zoo: "keepers"
}

// duplicate parameters
/*function duplicateParams(a,b,c,a){
  debuger;
  return a + b +b;
}*/

// octals not suported in strict mode
//var someOctal = 500 + 020;

// delete cant delete plain variables
var hahaha = "can't delete me !";
delete hahaha;
