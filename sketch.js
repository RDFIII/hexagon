function setup() {
  createCanvas(windowWidth, windowHeight);
	poly = new Polygondwana(0, 0, windowHeight/2.8, 8);
}

function draw() {
  background(14, 63, 142);

  // push();
  translate(windowWidth/2, windowHeight/2);
  rotate(frameCount / -120.0);
  poly.show();
  // pop();
}
