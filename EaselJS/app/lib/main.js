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