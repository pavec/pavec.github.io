var p1Score;
var p2Score;

var p1Up = false;
var p1Down = false;
var p2Up = false;
var p2Down = false;

Ball b;
Paddle p1;
Paddle p2;

function setup() {
  // put setup code here
  createCanvas(600, 600);
  b = new Ball();
  p1 = new Paddle(0);
  p2 = new Paddle(1);

}

function draw() {
  // put drawing code here
background(0);

  b.checkCollisionWithPaddle(p1);
  b.checkCollisionWithPaddle(p2);

  b.update();
  b.display();
  p1.update();
  p1.display();
  p2.update();
  p2.display();

  textSize(36);
  textAlign(CENTER, CENTER);
  fill(255, 0, 0);
  text(p1Score, width/2 - 100, 50);
  fill(0, 0, 255);
  text(p2Score, width/2 + 100, 50);
}

function keyPressed() {
  
    if (keyCode === UP_ARROW) {
      p2Up = true;
    }
    if (keyCode === DOWN_ARROW) {
      p2Down = true;
    } else {
    if (key === 'W') {
      p1Up = true;
    }
    if (key === 'S') {
      p1Down = true;
    }
  }
}

function keyReleased() {
    if (keyCode == UP_ARROW) {
      p2Up = false;
    }
    if (keyCode == DOWN_ARROW) {
      p2Down = false;
    }else {
    if (key == 'W') {
      p1Up = false;
    }
    if (key == 'S') {
      p1Down = false;
    }
  }
}

function Paddle {
  var x;
  var y;
  var w;
  var h;
  var playerNum;

  Paddle(var whichPlayer) {
    playerNum = whichPlayer;
    if (whichPlayer == 0) {
      this.x = 30;
      this.y = height/2;
      this.w = 20;
      this.h = 150;
    } else if (whichPlayer == 1) {
      this.y = height/2;
      this.w = 20;
      this.h = 150;
      this.x = width-30-w;
    }
  }

  this.update = function() {

    if (playerNum == 0) {
      if (p1Up) {
        y-=10;
      } 
      if (p1Down) {
        y+=10;
      }
    }
    if (playerNum == 1) {
      if (p2Up) {
        y-=10;
      } 
      if (p2Down) {
        y+=10;
      }
    }
  }

  this.display = function() {
    rectMode(CORNER);
    fill(255);
    rect(x, y, w, h);
  }
}

function Ball {
  var x;   
  var y;   
  var dx;  
  var dy;  
  var s1;
  var s2;
  var r;
  var g;
  var b;

  Ball(var x, var y) {
    this.x = x;
    this.y = y;
    x = width/2;
    y = height/2;
    s1 = 10;
    s2 = 10;
    dx = 10;  
    dy = random(-3, 3);
    r = 255;
    g = 255;
    b = 255;
  }

  this.display = function() {
    noStroke();
    fill(r, g, b);
    rectMode(CENTER);
    ellipse(x, y, s1, s2);
  }

  this.update = function() {
    x += dx;

    if (x < 0 || x > width) {

      if (x < 0) {
        p2Score++;
        background(70, 0, 0);
        s1+=5;
        r-=50;
        g-=50;
      }

      if (x > width) {
        p1Score++;
        background(0, 0, 70);
        s2+=5;
        g-=50;
        b-=50;
      }

      x = width/2;
      y = height/2;
      dx = -dx; 
      dy = random(-3, 3);
    } 

    if (y < 0 || y > height) {
      dy *= -1;
      y += dy;
    } else { 
      y += dy;
    }
  }

  function checkCollisionWithPaddle(Paddle p) {
    if (x > p.x && x < p.x + p.w) {
      if (y > p.y && y < p.y + p.h) {
        // Ball b = balls.get(i)
        balls.add(new Ball());
        dx = -dx;
        dy = random(-10, 10);
        //s2+=5;
        //if(s2 >= 60){
        // s2=10; 
        //}
        background(255);
      }
    }
  }
}