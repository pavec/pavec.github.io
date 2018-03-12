var sceneData;
var currentScene = 0;
var scenes = [];

function preload(){
  sceneData = loadJSON('code2midterm-datamodelex.json');
}

function setup() {
  createCanvas(800, 800);
  CreateScenesFromData(sceneData.scenes);
}

function draw() {
  background(255);
  // var character = ellipse(position.x, position.y, 20, 20)
  //   character.display();
    for (var i = 0; i < character.length; i++) {
    character[i].display();
    scenes[currentScene].display();

  }


}

function CreateScenesFromData(data){
  for(var i = 0; i < data.length; i++){
    scenes.push(new Scene(data[i].sceneText, data[i].options, data[i].nextScenes));
  }
}

function Scene(sceneText, options, nextScenes){
  this.sceneText = sceneText;
  this.options = options;
  this.nextScenes = nextScenes;
  this.col = col;
  this.textSize = textSize;

  this.display = function() {
    text(this.sceneText, 100, 100);
    for (var i = 0; i < options.length; i++) {
      text('OPTION ' + (i + 1) + ': ' + this.options[i], 150, 200 + i * 50);
    }
}

function character(position) {
  this.position = position;

  this.display = function() {
    noStroke();
    fill(random(255), 0, random(255));
    ellipse(this.position.x, this.position.y, 25, 25);
    // rect(this.position.x + 5, this.position.y + 5, 12, 12);
    // ellipse(this.position.x -5, this.position.y -3, 6, 9);
  }

function keyPressed() {
  if (key === 'W') {
    character.position.y --;
  }
  if (key === 'A') {
    character.position.x --;
  }
  if (key === 'S') {
    character.position.y ++;
  }
  if (key === 'D') {
    character.position.x ++;
  }
  var numberPressed = parseInt(key);
  var newScene = scenes[currentScene].nextScenes[numberPressed - 1];
  if (newScene !== undefined) {
    currentScene = newScene;
  }
}

