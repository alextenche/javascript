'use strict';

var Person = function(data){
  for(var key in data){
    this[key] = data[key];
  }
  this.getKeys = () => {
    return Object.keys(this);
  }
}

// 'this' referes to Alena
var Alena = new Person({name: 'Alena', role: 'teacher'});
console.log('Alena\'s keys: ' + Alena.getKeys());

// 'this' refers to the node process
var getKeys = Alena.getKeys;
console.log(getKeys());
