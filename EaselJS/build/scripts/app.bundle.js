(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var createSubClass = require('./utils/create_subclass'),
	Tile = require('./Tile');

module.exports = createSubClass(Tile, 'Block', {
	initialize: Block$initialize
});

function Block$initialize(x, y){
	Tile.prototype.initialize.apply(this, arguments);
	this.name = 'block';

	this.graphics.beginFill('black').drawRect(0, 0, 50, 50);
}
},{"./Tile":5,"./utils/create_subclass":8}],2:[function(require,module,exports){
'use strict';

var createSubClass = require('./utils/create_subclass'),
	Tile = require('./Tile');

module.exports = createSubClass(Tile, 'Box', {
	initialize: Box$initialize
});

function Box$initialize(x, y){
	Tile.prototype.initialize.apply(this, arguments);
	this.name = 'box';
	this.graphics.beginFill('red').drawRect(0, 0, 50, 50);
}
},{"./Tile":5,"./utils/create_subclass":8}],3:[function(require,module,exports){
'use strict';

var createSubClass = require('./utils/create_subclass'),
	Tile = require('./Tile');

module.exports = createSubClass(Tile, 'Diamond', {
	initialize: Diamond$initialize
});

function Diamond$initialize(x, y){
	Tile.prototype.initialize.apply(this, arguments);
	this.name = 'diamond';
	console.log('tile ok');
	this.graphics.beginFill('blue').drawCircle(0, 0, 50, 50);
}
},{"./Tile":5,"./utils/create_subclass":8}],4:[function(require,module,exports){
'use strict';

var createSubClass = require('./utils/create_subclass'),
	Tile = require('./Tile');

module.exports = createSubClass(Tile, 'Hero', {
	initialize: Hero$initialize
});

function Hero$initialize(x, y){
	Tile.prototype.initialize.apply(this, arguments);
	this.name = 'hero';

	this.graphics.beginFill('green').drawRoundRect(0, 0, 50, 50, 15);
}
},{"./Tile":5,"./utils/create_subclass":8}],5:[function(require,module,exports){
'use strict';

var createSubClass = require('./utils/create_subclass'),
	Shape = createjs.Shape;

var TILE_SIZE = 50;

module.exports = createSubClass(Shape, 'Tile', {
	initialize: Tile$initialize,
	setPos: Tile$setPos
});

function Tile$initialize(x, y){
	console.log('tile ok');
	Shape.prototype.initialize.call(this, null);
	this.setPos(x,y);
	console.log('tile ok');
}

function Tile$setPos(x,y){
	this.gameX = x;
	this.gameY = y;
	this.x = x * TILE_SIZE;
	this.y = y * TILE_SIZE;
}
},{"./utils/create_subclass":8}],6:[function(require,module,exports){
'use strict';

module.exports = [
	{
		name: 'Level 1',
		map: [
			[1,1,1,1,0,0,0,0],
			[1,0,0,1,1,1,1,1],
			[1,0,2,0,0,3,0,1],
			[1,0,3,0,0,2,4,1],
			[1,1,1,0,0,1,1,1],
			[0,0,1,1,1,1,0,0]
		]
	}
];
},{}],7:[function(require,module,exports){
'use strict';

var utils = require('./utils'),
	domReady = utils.domReady,
	Hero = require('./Hero'),
	Diamond = require('./Diamond'),
	Box = require('./Box'),
	Block = require('./Block'),
	levels = require('./levels');

var classMap = {
	'1' : Block,
	'2' : Diamond,
	'3' : Box,
	'4' : Hero
};

var c = createjs;

console.log('Game Started: EaselJS version: ' + createjs.EaselJS.version);

domReady(function(){
	var stage = new c.Stage('main');

	var map = levels[0].map;
	var tiles = [];

	map.forEach(function(row, indexY){
		tiles.push([]);
		row.forEach(function(title, indexX){
			var TileClass = classMap[tile];
			if(TileClass){
				var newTile = new TileClass(indexX, indexY);
				stage.addChild(newTile);
				tiles[indexY][indexX] = newTile;
			}
			
		});
	});

	console.log(tiles);
	
	stage.update();
});
},{"./Block":1,"./Box":2,"./Diamond":3,"./Hero":4,"./levels":6,"./utils":10}],8:[function(require,module,exports){
'use strict';

module.exports = createSubclass;

function createSubclass(Superclass, name, methods){
	var Subclass;

	Subclass = function(){this.initialize.apply(this, arguments)};
	//eval('Subclass = function ' + name + ' (){ this.prototype.initialize.apply(this, arguments) }');

	Subclass.prototype = new Superclass();

	for (var key in methods) {
		if(methods.hasOwnProperty(key)){
			Subclass.prototype[key] = methods[key];
		}
	};
	
	return Subclass;
}
},{}],9:[function(require,module,exports){
'use strict'

module.exports = domReady;

/**
* Fires when dom is ready, can be used at any time as result is chached
* @param {Function} funct callback function for when dom is ready
* @return {Any} returns whatever func returns
*/
function domReady(func){ // , arguments
	var self = this,
		args = Array.prototype.slice.call(arguments,1 );
	if(isReady.call(this)){
		return callFunc();
	} else {
		document.addEventListener('readystatechange', callFunc);
	}

	function callFunc(){
		document.removeEventListener('readystatechange', callFunc);
		return func.apply(self, args);
	}
}

domReady.isReady = isReady;


/**
* Returns true if the dom is ready
* @return {Boolean}
*/
function isReady(){
	var readyState = document.readyState;
	return readyState == 'loading' ? false : readyState;
}


},{}],10:[function(require,module,exports){
'use strict';

module.exports = {
	domReady: require('./dom_ready'),
	createSubclass : require('./create_subclass')
};
},{"./create_subclass":8,"./dom_ready":9}]},{},[7]);