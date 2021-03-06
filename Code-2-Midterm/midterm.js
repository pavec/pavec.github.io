var sceneData;
var currentScene = 0;
var scenes = [];
var img;

function preload(){
  sceneData = loadJSON('code2midterm-datamodelex.json');
  img = loadImage("castle-trail-wallpaper-abstract.jpg");
}

function setup() {
  createCanvas(800, 800);
  CreateScenesFromData(sceneData.scenes);
  image(img, 100, 100, 100, 100);
}

function draw() {

  background(100);
  scenes[currentScene].display();
  fill(0);
  textSize(24);
  // text(sceneText);

  // for (var i = 0; i < scenes.length; i++){
  //   scenes[i].mousehit();
  // }
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
    // text(this.objects, 150, 250);
    for (var i = 0; i < objects.length; i++) {
      text('OBJECT ' + (i + 1) + ': ' + this.objects[i], 200, 200 + (options.length - 1) * 50 + 200 + i * 60);
      // this.mousehit = function(){
      //   this.responses[i].display();
      // }
    }

    var responsePicked = -1;
    text(this.responses[responsePicked], 0, 50);
  }
}

function keyPressed() {

if(key === 'W'){
  responsePicked = 0;
}
if(key === 'S'){
  responsePicked = 1;
}

  var numberPressed = parseInt(key);
  var newScene = scenes[currentScene].nextScenes[numberPressed - 1];
  if (newScene !== undefined) {
    currentScene = newScene;
  }
}