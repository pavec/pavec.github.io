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
	ferguson = loadAnimation("ferguson-idle1.png", "ferguson-idle2.png", 
			"ferguson-idle3.png", "ferguson-idle4.png", "ferguson-idle5.png", 
			"ferguson-idle6.png", "ferguson-idle7.png", "ferguson-idle8.png", 
			"ferguson-idle9.png");
	fergusonMoving = loadAnimation("ferguson-walk1.png", "ferguson-walk2.png", 
			"ferguson-walk3.png", "ferguson-walk4.png", "ferguson-walk5.png", 
			"ferguson-walk6.png", "ferguson-walk7.png", "ferguson-walk8.png", 
			"ferguson-walk9.png", "ferguson-walk10.png");
}

function setup(){
	createCanvas (800, 800);
	CreateLevelsFromData(levelData.levels);
}

function draw(){
	background(255);
	levels[currentLevel].display();
	fill(0);
	textSize(18);
	var x = 200;
	var y = 600;
	if(playerUp){
		//ferguson up
		animation(fergusonMoving, x, y);
		y++;
	}else if(playerDown){
		//ferguson down
		animation(fergusonMoving, x, y);
		y--;
	}else if(playerLeft){
		//ferguson left
		animation(fergusonMoving, x, y);
		x--;
	}else if(playerRight){
		//ferguson right
		animation(fergusonMoving, x, y);
		x++;
	}else {
		//idle anim, still on screen
		animation(ferguson, x, y);
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
		for(var i = 0; i < instructions.length; i++){
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