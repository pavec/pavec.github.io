var paintmarks = [];
var paintDataFile = 'paintData.json';

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255);
  for (var i = 0; i < paintmarks.length; i++) {
    paintmarks[i].display();
  }

  fill(0);
  textSize(24);
  text("drag the mouse across the canvas to draw.", 50, 570);
  text("press 'S' to save a json file with the current paint data.", 50, 600);
  text("press 'L' to load a json file from your computer.", 50, 630);
}

function PaintMark(position) {
  this.position = position;

  this.display = function() {
    noStroke();
    fill(random(255), 0, random(255));
    ellipse(this.position.x, this.position.y, 10, 10);
    rect(this.position.x + 5, this.position.y + 5, 12, 12);
    ellipse(this.position.x -5, this.position.y -3, 6, 9);
  }

}

function mouseDragged() {
  paintmarks.push(new PaintMark(createVector(mouseX, mouseY)));
}

function keyPressed() {
  if (key === 'S') {
    savePaintData();
  }
  if (key === 'L') {
    loadPaintData();
  }
}

function savePaintData() {
  positionsToSave = [];
  for (var i = 0; i < paintmarks.length; i++) {
    positionsToSave.push(
      { 
        x: paintmarks[i].position.x, 
        y: paintmarks[i].position.y 
      }
    );
  }
  saveJSON(positionsToSave, 'paintData.json');
}

function loadPaintData() {
  loadJSON(paintDataFile, parsePaintData);
}

function parsePaintData(data) {
  paintmarks = [];

  for (var i = 0; i < data.length; i++) {
    paintmarks.push(new PaintMark(createVector(data[i].x, data[i].y)));
  }
}