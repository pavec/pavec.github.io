var sceneData;

var currentScene = 0;
var scenes = [];

function preload() {
  sceneData = loadJSON('scenes.json');
}

function setup() {
  createCanvas(800, 800);
  CreateScenesFromData(sceneData.scenes);
}

function draw() {
  background(231, 190, 150);
  scenes[currentScene].display();

  fill(0);
  // textSize(24);
  text("press the option number to advance to the indicated scene", 50, 700);
}

function CreateScenesFromData(data) {
  for (var i = 0; i < data.length; i++) {
    scenes.push(new Scene(data[i].sceneText, data[i].options, data[i].nextScenes, data[i].col, data[i].textSize))
  }
}

function Scene(sceneText, options, nextScenes, color, textSize) {
  this.sceneText = sceneText;
  this.options = options;
  this.nextScenes = nextScenes;
  this.col = col;
  this.textSize = textSize;


  this.display = function() {
    fill(this.col);
    textSize(this.textSize);
    text(this.sceneText, 100, 100);

    for (var i = 0; i < options.length; i++) {
      text('OPTION ' + (i + 1) + ': ' + this.options[i], 150, 200 + i * 50);
    }
  }
}

function keyPressed() {
  var numberPressed = parseInt(key);
  var newScene = scenes[currentScene].nextScenes[numberPressed - 1];
  if (newScene !== undefined) {
    currentScene = newScene;
  }
}