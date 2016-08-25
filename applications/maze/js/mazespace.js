'use strict';

function MazeSpace(directions){
	var i;
	for(i = 0; i < directions.length; i += 1){
		this[directions[i]] = false;
	}
}

// create wall in direction that is true
MazeSpace.prototype.setWall = function(direction){
	this[direction] = true;
}