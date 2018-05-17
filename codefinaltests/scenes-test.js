


var objects;
var ferguson;
var score = 0;
var flowerMonsters;
var flower;
var leaves;

function setup() {
  createCanvas(900, 900);

  objects = new Group();
  for (var i = 0; i < 10; i++) {
  flower = loadImage("flower.png");
  flowerMonsters = loadImage("flowermonster.png");
  leaves = loadImage("leaf.png");
  leafSprite = createSprite(random(100, width-100), random(100, height-100));
  leafSprite.addImage(leaves);
    // var c = image (leaves, random(100, width-100), random(100, height-100), 10, 10);
    // c.shapeColor = color(255, 255, 0);
    objects.add(leafSprite);
  }

  ferguson = createSprite(width/2, height/2, 10, 10);
  // ferguson.shapeColor = color(255);
  ferguson.addAnimation("moving", "ferguson-walk1.png", "ferguson-walk3.png", 
  			"ferguson-walk5.png", "ferguson-walk7.png", "ferguson-walk9.png");

}

function draw() {
  background(8, 70, 22);

  ferguson.position.x = mouseX;
  ferguson.position.y = mouseY;

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
  //if(objects.length < 0){currentLevel = nextLevel}
}
function getObjects(ferguson, object) {
  object.remove();
  score += 1;
}
