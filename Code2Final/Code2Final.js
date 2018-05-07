var levelData;
var currentLevel = 0;
var levels = [];

var playerUp = false;
var playerDown = false;
var playerLeft = false;
var playerRight = false;

var ferguson;


function preload(){
	levelData = loadJSON('code2final-scenes.json');
}

function setup(){
	createCanvas (800, 800);
	CreateLevelsFromData(levelData.levels);
}

function draw(){
	background(255);
	levels[currentLevel].display();
	fill(0);
	textSize(18)
	if(playerUp){
		//ferguson up
	}
	if(playerDown){
		//ferguson down
	}
	if(playerLeft){
		//ferguson left
	}
	if(playerRight){
		//ferguson right
	}
}

function CreateLevelsFromData(){
	for(var i = 0; i < data.length; i++){
		levels.push(new Level (data[i].levelText, data[i].instructions, data[i].nextLevel));
	}
}

function Level (levelText, instructions, nextLevel){
	this.levelText = levelText;
	this.instructions = instructions;
	this.nextLevel = nextLevel;
	this.display = function(){
		text(levelText, 80, 80);
		for(var i = 0; i < instructions.length, i++){
			text('' + this.instructions[i], 100, 150 + i * 50);
		}

	}
}

function keyPressed(){
	if(key === 'W'){
		playerUp = true;
	}
	if (key === 'S') {
    	playerDown = true;
  	}
  	if (key === 'A') {
    	playerLeft = true;
  	}
  	if (key === 'D') {
    	playerDown = true;
  	}

  	if(key === 'space'){
  		currentLevel = nextLevel;
  	}
}

function keyReleased(){
	if(key === 'W'){
		playerUp = false;
	}
	if (key === 'S') {
    	playerDown = false;
  	}
  	if (key === 'A') {
    	playerLeft = false;
  	}
  	if (key === 'D') {
    	playerRight = false;
  	}
}