


function setup() {
  createCanvas(400, 400);


}
function draw() {
  background(50);
  for (var i = 0; i < allGifs.length; i++) {
    allGifs[i].addSpeed(0.1, 90);
    if (allGifs[i].position.y > height) {
      allGifs[i].velocity.y *= -1;
    }
    if (allGifs[i].position.x > width ||
        allGifs[i].position.x < 0) {
      allGifs[i].remove();
    }
  }
  textAlign(RIGHT, TOP);
  text("sprite count: " + allGifs.length,
    width-10, 10);
  drawGifs();
}
function mousePressed() {
  var gif = createSprite(width/2, height/2,
    random(10, 50), random(10, 50));
  gif.Color = color(255);
  gif.velocity.y = random(3);
  gif.velocity.x = random(-3, 3);
  gif.position.x = mouseX;
  gif.position.y = mouseY;
}


