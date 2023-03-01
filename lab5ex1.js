let x;
let y;
let speedX;
let speedY;

function setup() {
  createCanvas(400, 400);
  colorMode(HSL);
  angleMode(DEGREES);
  x = 0;
  y = 0;
  speedX = random(1, 5);
  speedY = random(1, 5);
}

function draw() {
  background(220);
  x = x + speedX;
  y = y + speedY;
  addDachshund(x, y, 0.5);
  if (x >= 360 || x <= -40) {
    speedX = speedX * -1;
  }
  if (y >= 370 || y <= -50) {
    speedY = speedY * -1;
  }
}

function addDachshund(translateX, translateY, size) {
  push();
  translate(translateX, translateY);
  scale(size);
  noStroke();
  fill(42, 80, 30); //main color
  ellipse(127, 86, 4, 20); //right legs
  ellipse(80, 86, 4, 20);
  ellipse(125, 93.5, 8, 4); //feet
  ellipse(78, 93.5, 8, 4);
  stroke(42, 80, 30); //main color
  strokeWeight(5);
  noFill();
  arc(135, 42, 40, 30, 10, 90); //tail
  noStroke();
  fill(42, 80, 30); //main color
  rect(50, 50, 90, 30, 30); //body
  shearX(20);
  ellipse(34, 50, 20, 30); //neck
  shearX(-20);
  ellipse(45, 42, 35, 30); //head
  shearX(-30);
  ellipse(65, 52, 30, 14); //snout
  shearX(30);
  noStroke();
  ellipse(115, 86, 4, 20); //left legs
  ellipse(67, 86, 4, 20);
  ellipse(112, 93.5, 8, 4); //feet
  ellipse(65, 93.5, 8, 4);
  stroke("black");
  fill(42, 80, 30);
  strokeWeight(1);
  arc(54, 44, 18, 40, -53, 254, OPEN); //ear
  fill("black");
  ellipse(34, 40, 4); //eye
  arc(22, 53, 7, 6, 120, 280); //nose
  noFill();
  arc(30, 54, 20, 8, 0, 90); //mouth
  pop();
}
