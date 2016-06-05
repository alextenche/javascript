"use strict";

var City = function(name, state){
  this.name = name || "Timisoara";
  this.state = state || "Timis";
  this.printMyCityAndState = function(){
    console.log("My city is " + this.name + ", and my state is " + this.state);
  };
};

var timisoara = new City();
var lugoj = new City("Lugoj");

timisoara.printMyCityAndState();
lugoj.printMyCityAndState();
