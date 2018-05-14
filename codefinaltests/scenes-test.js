var levelData;
var levels = [];
var currentLevel = 0;

var sceneState = {
	START: 0;
	LVL1: 1;
	LVL2: 2;
	LVL3: 3;
	END: 4;
};

//var thisLevel = sceneState.START;

function preload(){
	levelData = loadJSON('');
}

function setup(){
	createCanvas(800, 800);
	CreateScenesFromData(levelData.levels);
}

function draw(){
	background(115);
	makeLevel(thisLevel);

}

function CreateScenesFromData(data){
	//the for loop w all the json parameters
}

function makeLevel(whichLevel){
	switch(thisLevel){
		case sceneState.START:
		background();
		//draw stuff
		levels[currentLevel].display();
		break;

		case sceneState.LVL1:
		background();
		//draw stuff
		levels[currentLevel].display();
		break;

		case sceneState.LVL2:
		background();
		//draw stuff
		levels[currentLevel].display();
		break;

		case sceneState.LVL3:
		background();
		//draw stuff
		levels[currentLevel].display();
		break;

		case sceneState.END:
		background();
		//draw stuff
		levels[currentLevel].display();
		break;
	}
}

function checkTransition(whichLevel){
	switch(thisLevel){
		case.sceneState.START:
		//if (whatever triggers the scene change){
			thisLevel++;
			setUpLevel(thisLevel);
		}
		break;
		case.sceneState.LVL1:
		//if (whatever triggers the scene change){
			thisLevel++;
			setUpLevel(thisLevel);
		}
		break;

		case.sceneState.LVL2:
		//if (whatever triggers the scene change){
			thisLevel++;
			setUpLevel(thisLevel);
		}
		break;

		case.sceneState.LVL3:
		//if (whatever triggers the scene change){
			thisLevel++;
			setUpLevel(thisLevel);
		}
		break;

		case.sceneState.END:
		//if (whatever triggers the scene change){
			thisLevel++;
			setUpLevel(thisLevel);
		}
		break;
		default;
		break;

	}
}

function setUpLevel(whichLevel){
	switch(whichLevel){
		case sceneState.START:
		break;
		case sceneState.LVL1:
		break;
		case sceneState.LVL2:
		break;
		case sceneState.LVL3:
		break;
		case sceneState.END:
		break;
		default;
		break;
	}
}

function Level(//parameters from json){
	//list all parameters with this.
	this.display = function(){
		fill()
		textSize()
		text(this.leveText, 100, 100)
		for (var i = 0; i < options.length; i++) {
      	text('Go to: ' + this.options[i], 150, 200 + i * 50);
   	 	}
	}
}

//keyPressed stuff for calling different parts of the data
function keyPressed() {
  var numberPressed = parseInt(key);
  var newScene = scenes[currentScene].nextScenes[numberPressed - 1];
  if (newScene !== undefined) {
    currentScene = newScene;
  }
}



