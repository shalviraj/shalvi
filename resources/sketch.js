// Polar Perlin Noise Loop
// Daniel Shiffman
// Modified by Shalvi Raj

let phase = 0;
let zoff = 0;
var canvas;

function windowResized () {
    console.log('resized');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-10')
}

function draw() {
  background(50);
  translate(windowWidth/2, windowHeight/2);
  stroke(255,255,255);
  strokeWeight(1);
  noFill();
  beginShape();
  let noiseMax1 = mouseX/400;
  let noiseMax2 = mouseY/400;
  for (let a = 0; a < TWO_PI; a += radians(5)) {
    let xoff = map(cos(a + phase), -1, 1, 0, noiseMax1);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMax2);
    let r = map(noise(xoff, yoff, zoff), 0, 1, 100, height / 2);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
  phase += 0.003;
  zoff += 0.01;
}