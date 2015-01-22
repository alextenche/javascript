(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var utils = require('./utils'),
	domReady = utils.domReady;

console.log('Game Started: EaselJS version: ' + createjs.EaselJS.version);

domReady(function(){
	var stage = new createjs.Stage('main');

	var group = new createjs.Container();
	group.x = 200;
	group.y = 175;
	group.regX = 100;
	group.regY = 100;
	stage.addChild(group);

	group.on('tick', function(event){
		this.rotation -= 1;
	});

	var circle = new createjs.Shape();
	circle.graphics.beginFill('green').drawCircle(0, 0, 50);
	circle.x = 100;
	circle.y = 100;
	group.addChild(circle);

	var square = new createjs.Shape();
	square.graphics.beginFill('green')
				   .drawRect(0, 0, 50, 50)
				   .endFill()
				   .beginStroke('rgba(0,0,0,1)')
				   .moveTo(5,75)
				   .bezierCurveTo(45, 90, 75, 75, -25, -25)
				   .endStroke();
	square.x = 200;
	square.y = 100;
	group.addChild(square);

	var introText = new createjs.Text('Welcome to the game.', '20px Arial', '#ccc');
	introText.x = 200;
	introText.y = 300;
	introText.lineWidth = 100;
	stage.addChild(introText);
	

	createjs.Ticker.timingMode = createjs.Ticker.RAF;
	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener('tick', function(event){
		stage.update();
	});
});
},{"./utils":3}],2:[function(require,module,exports){
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


},{}],3:[function(require,module,exports){
'use strict';

module.exports = {
	domReady: require('./dom_ready')
};
},{"./dom_ready":2}]},{},[1]);