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