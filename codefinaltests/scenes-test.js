
//STATE MACHINE

// var levelData;
// var levels = [];
// var currentLevel = 0;

// var sceneState = {
// 	START: 0;
// 	LVL1: 1;
// 	LVL2: 2;
// 	LVL3: 3;
// 	END: 4;
// };

// //var thisLevel = sceneState.START;

// function preload(){
// 	levelData = loadJSON('');
// }

// function setup(){
// 	createCanvas(800, 800);
// 	CreateScenesFromData(levelData.levels);
// }

// function draw(){
// 	background(115);
// 	makeLevel(thisLevel);

// }

// function CreateScenesFromData(data){
// 	//the for loop w all the json parameters
// 	for(var i = 0; i < data.length; i++){
// 		levels.push(new Level (data[i].levelText, data[i].instructions, data[i].nextLevel));
// 	}
// }

// function makeLevel(whichLevel){
// 	switch(thisLevel){
// 		case sceneState.START:
// 		background(50);
// 		//draw stuff
// 		levels[currentLevel].display();
// 		break;

// 		case sceneState.LVL1:
// 		background(100);
// 		//draw stuff
// 		levels[currentLevel].display();
// 		break;

// 		case sceneState.LVL2:
// 		background(150);
// 		//draw stuff
// 		levels[currentLevel].display();
// 		break;

// 		case sceneState.LVL3:
// 		background(200);
// 		//draw stuff
// 		levels[currentLevel].display();
// 		break;

// 		case sceneState.END:
// 		background(250);
// 		//draw stuff
// 		levels[currentLevel].display();
// 		break;
// 	}
// }

// function checkTransition(whichLevel){
// 	switch(thisLevel){
// 		case.sceneState.START:
// 		//if (whatever triggers the scene change){
// 			thisLevel++;
// 			setUpLevel(thisLevel);
// 		}
// 		break;
// 		case.sceneState.LVL1:
// 		//if (whatever triggers the scene change){
// 			thisLevel++;
// 			setUpLevel(thisLevel);
// 		}
// 		break;

// 		case.sceneState.LVL2:
// 		//if (whatever triggers the scene change){
// 			thisLevel++;
// 			setUpLevel(thisLevel);
// 		}
// 		break;

// 		case.sceneState.LVL3:
// 		//if (whatever triggers the scene change){
// 			thisLevel++;
// 			setUpLevel(thisLevel);
// 		}
// 		break;

// 		case.sceneState.END:
// 		//if (whatever triggers the scene change){
// 			thisLevel++;
// 			setUpLevel(thisLevel);
// 		}
// 		break;
// 		default;
// 		break;

// 	}
// }

// function setUpLevel(whichLevel){
// 	switch(whichLevel){
// 		case sceneState.START:
// 		break;
// 		case sceneState.LVL1:
// 		break;
// 		case sceneState.LVL2:
// 		break;
// 		case sceneState.LVL3:
// 		break;
// 		case sceneState.END:
// 		break;
// 		default;
// 		break;
// 	}
// }

// function Level(//parameters from json){
// 	//list all parameters with this.
// 	this.display = function(){
// 		fill()
// 		textSize()
// 		text(this.leveText, 100, 100)
// 		for (var i = 0; i < options.length; i++) {
//       	text('Go to: ' + this.options[i], 150, 200 + i * 50);
//    	 	}
// 	}
// }

// //keyPressed stuff for calling different parts of the data
// function keyPressed() {
//   var numberPressed = parseInt(key);
//   var newScene = scenes[currentScene].nextScenes[numberPressed - 1];
//   if (newScene !== undefined) {
//     currentScene = newScene;
//   }
// }

//WINNING BASED ON ITEM COLLECTION


var objects;
var ferguson;
var score = 0;

// function preload(){
// 	ferganim = loadAnimation("ferguson-walk1.png", "ferguson-walk2.png", 
// 			"ferguson-walk3.png", "ferguson-walk4.png", "ferguson-walk5.png", 
// 			"ferguson-walk6.png", "ferguson-walk7.png", "ferguson-walk8.png", 
// 			"ferguson-walk9.png", "ferguson-walk10.png");
// }

function setup() {
  createCanvas(1100, 1100);
  objects = new Group();
  for (var i = 0; i < 10; i++) {
    var c = createSprite(
      random(100, width-100),
      random(100, height-100),
      10, 10);
    c.shapeColor = color(255, 255, 0);
    objects.add(c);
  }

  ferguson = createSprite(width/2, height/2, 10, 10);
  // ferguson.shapeColor = color(255);
  ferguson.addAnimation("moving", "ferguson-walk1.png", "ferguson-walk3.png", 
  			"ferguson-walk5.png", "ferguson-walk7.png", "ferguson-walk9.png");

}

function draw() {
  background(50);
  // ferguson = animation (ferganim, 5, 5, 20, 20);

  // ferguson.velocity.x = (mouseX-ferguson.position.x)*0.1;
  // ferguson.velocity.y = (mouseY-ferguson.position.y)*0.1;

  ferguson.position.x = mouseX;
  ferguson.position.y = mouseY;

  ferguson.overlap(objects, getObjects);
  drawSprites();
  fill(255);
  noStroke();
  textSize(72);
  textAlign(CENTER, CENTER);
  if (objects.length > 0) {
    text(score, width/2, height/2);
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


