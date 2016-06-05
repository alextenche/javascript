"use strict";

var Timisoara = {
  bridges: 6,
  airport: 1,
  soccerTeams: 2,
  logNumberOfBridges: function(){
    console.log("There are " + this.bridges + " bridges in Timisoara.");
  },
  logSoccerTeams: function(){
    console.log("There are " + this.soccerTeams + " soccer teams in Timisoara.");
  }
}

function logTeams(){
  console.log(this);
}

Timisoara.foo = logTeams;
// Timisoara.foo();
logTeams();

// Timisoara.logNumberOfBridges();
