var sceneData;
var currentScene = 0;
var scenes = [];

function preload(){
  sceneData = loadJSON('code2midterm-datamodelex.json');
}

function setup() {
  createCanvas(800, 800);
  CreateScenesFromData(sceneData.scenes);
  ellipse(mouseX, mouseY, 30, 30);
}

function draw() {
  background(255);
  scenes[currentScene].display();
  fill(0);
  textSize(24);
  text(sceneText);

  // var character = ellipse(position.x, position.y, 20, 20);
  // for (var i = 0; i < character.length; i++) {
  //   character[i].display(mouseX, mouseY);
    // character[i].display();

  }
}

function CreateScenesFromData(data){
  for(var i = 0; i < data.length; i++){
    scenes.push(new Scene (data[i].sceneText, data[i].background, data[i].options, data[i].nextScenes, data[i].objects, data[i].responses));
  }
}

function Scene(sceneText, background, options, nextScenes, objects, responses){
  this.sceneText = sceneText;
  this.options = options;
  this.nextScenes = nextScenes;
  this.background = background;
  this.objects = objects;
  this.responses = responses;
 

  this.display = function() {
    text(this.sceneText, 100, 100);
    for (var i = 0; i < options.length; i++) {
      text('OPTION ' + (i + 1) + ': ' + this.options[i], 150, 200 + i * 50);
    }
    text(this.objects, 150, 150);
    for (var i = 0; i < objects.length; i++) {
      text('LOCATION OBJECTS' + (i + 1) + ': ' + this.objects[i], 150, 200 + i * 50);
    }
  }
}

// function character(position) {
//   this.position = position;

//   this.display = function() {
//     noStroke();
//     fill(random(255), 0, random(255));
//     ellipse(this.position.x, this.position.y, 100, 100);
//   }
// }

function keyPressed() {
  // if (key === 'W') {
  //   character.position.y --;
  // }
  // if (key === 'A') {
  //   character.position.x --;
  // }
  // if (key === 'S') {
  //   character.position.y ++;
  // }
  // if (key === 'D') {
  //   character.position.x ++;
  // }
  var numberPressed = parseInt(key);
  var newScene = scenes[currentScene].nextScenes[numberPressed - 1];
  if (newScene !== undefined) {
    currentScene = newScene;
  }
}