// "use strict";

function assignRegimentMotto(number, motto){
  // eval("regiment" + number + ".moto = '" + motto + "'");
  // better way - minimize eval usage
  eval("regiment" + number).motto = motto;
}

assignRegimentMotto(2, "Le Creme de la Creme");
console.log(regiment.motto);

var regiments = ["reg1", "reg2", "reg3"];

function assignRegimentMottoWithArrays(number, motto){
  regiments[number].motto = motto;
}
