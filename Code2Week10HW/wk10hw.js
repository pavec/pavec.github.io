function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(50);
  for (var i = 0; i < allSprites.length; i++) {
    allSprites[i].addSpeed(0.1, 90);
    if (allSprites[i].position.y > height) {
      allSprites[i].velocity.y *= -1;
    }
    // any code that removes sprites should be
    // the *last* thing in the loop!
    if (allSprites[i].position.x > width ||
        allSprites[i].position.x < 0) {
      allSprites[i].remove();
    }
  }
  textAlign(RIGHT, TOP);
  text("sprite count: " + allSprites.length,
    width-10, 10);
  drawSprites();
}
function mousePressed() {
  var spr = createSprite(width/2, height/2,
    random(10, 50), random(10, 50));
  spr.shapeColor = color(255);
  spr.velocity.y = random(3);
  spr.velocity.x = random(-3, 3);
  spr.position.x = mouseX;
  spr.position.y = mouseY;
}