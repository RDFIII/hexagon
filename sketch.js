function setup() {
  createCanvas(windowWidth, windowHeight);
	ball1 = new Ball(width/2, height/2, 40, -2.5, 2);
	poly = new Polygondwana(0, 0, windowHeight/2.8, 8);
	// ball1 = new Ball(windowWidth/2, windowHeight/2, 40, 2, 3);

}

function draw() {
  background(14, 63, 142);

	push();
	translate(windowWidth/2, windowHeight/2);
  poly.show();
	pop();

	ball1.show();
	ball1.move();

}
