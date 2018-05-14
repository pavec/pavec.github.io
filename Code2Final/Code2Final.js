var levelData;
var currentLevel = 0;
var levels = [];

var objects;
var ferguson;
var score = 0;
var flowerMonsters;
var flower;
var leaves;

var sceneState = {
	START: 0,
	LVL1: 1,
	LVL2: 2,
	LVL3: 3,
	END: 4
};

function preload(){
	levelData = loadJSON('code2final-scenes.json');

}

function setup(){
	createCanvas (800, 800);
	CreateLevelsFromData(levelData.levels);
	objects = new Group();
  	for (var i = 0; i < 10; i++) {
  		flower = loadImage("flower.png");
  		flowerMonsters = loadImage("flowermonster.png");
  		leaves = loadImage("leaf.png");
  		leafSprite = createSprite(random(100, width-100), random(100, height-100));
  		leafSprite.addImage(leaves);
    	objects.add(leafSprite);
  }

  ferguson = createSprite(width/2, height/2, 10, 10);
  ferguson.addAnimation("moving", "ferguson-walk1.png", "ferguson-walk3.png", 
  			"ferguson-walk5.png", "ferguson-walk7.png", "ferguson-walk9.png");

}

function draw(){
	background(255);

	ferguson.position.x = mouseX;
  	ferguson.position.y = mouseY;


	// makeLevel(thisLevel);
	levels[currentLevel].display();
	fill(0);
	textSize(18);

	ferguson.overlap(objects, getObjects);
  	drawSprites();
  	fill(255);
  	noStroke();
  	textSize(72);
  	textAlign(CENTER, CENTER);
  	if (objects.length > 0) {

  	}
  	else {
    text("you win!", width/2, height/2);
  	  //MAKE THIS GO TO NEXT SCENE
  	}
	
}

function getObjects(ferguson, object) {
  object.remove();
  score += 1;
}

function CreateLevelsFromData(data){
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
