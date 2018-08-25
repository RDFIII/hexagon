function setup() {
  createCanvas(windowWidth, windowHeight);
	ball1 = new Ball(0, 0, 40, -2.5, 2);
	poly = new Polygondwana(0, 0, windowHeight/2.8, 8);
	// ball1 = new Ball(windowWidth/2, windowHeight/2, 40, 2, 3);

}

function draw() {
  background(14, 63, 142);

	  translate(windowWidth/2, windowHeight/2);

	push();
  poly.show();
	pop();
	
	ball1.show();
	ball1.move();

}
