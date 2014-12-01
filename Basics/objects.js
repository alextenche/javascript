
/*var jim = {
		name:"Jim",
		skills : ["JavaScript", "Php", "Dancing"],
		"favorite color" : "green",
		greet : function(name, mood){
			name = name || "You";
			mood = mood || "good";
			console.log("Hello,  "+ name + " I am " + this.name + " and I am in a " + mood + " mood!" );
		}
};
		
var nick = {
		name:"Nick",
		greet : jim.greet
};*/
		
/*jim["favorite color"] = "blue";

console.log(jim.name);
console.log(jim["favorite color"]);*/

/*jim.name = "James";

jim["greet"]("Ryan", "awesome");
nick.greet();

var jimGreet = jim.greet;
jimGreet.call({name:"Amit"}, "Matt", "bad");

jim.greet.apply(nick, ["Matt","bad"]);

var args = ["Michael","happy"];
jim.greet.apply(jim,args);*/


var personPrototype = {
	name: 'Anonymous',
	greet : function(name, mood){
			name = name || "You";
			mood = mood || "good";
			console.log("Hello,  "+ name + " I am " + this.name + " and I am in a " + mood + " mood!" );
		},
	species: 'Homo Sapien'
}

function Person(name){
	this.name = name;
}

Person.prototype = personPrototype;

jim = new Person("Jim");
nick = new Person("Nick");



