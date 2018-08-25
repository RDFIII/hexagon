function setup() {
  createCanvas(windowWidth, windowHeight);
	poly = new Polygondwana(0, 0, windowHeight/2.8, 8);
}

function draw() {
  background(130);

  // push();
  translate(windowWidth/2, windowHeight/2);
  rotate(frameCount / -100.0);
  poly.show();
  // pop();
}

class Polygondwana {
	constructor(x, y, radius, npoints) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.npoints = npoints;
	}

	show() {
		noStroke();
		let angle = TWO_PI / this.npoints;
		beginShape();
	  for (var a = 0; a < TWO_PI; a += angle) {
	    var sx = this.x + cos(a) * this.radius;
	    var sy = this.y + sin(a) * this.radius;
	    vertex(sx, sy);
	  }
	  endShape(CLOSE);
	}
}

// function polygon(x, y, radius, npoints) {
//   var angle = TWO_PI / npoints;
//   beginShape();
//   for (var a = 0; a < TWO_PI; a += angle) {
//     var sx = x + cos(a) * radius;
//     var sy = y + sin(a) * radius;
//     vertex(sx, sy);
//   }
//   endShape(CLOSE);
// }
