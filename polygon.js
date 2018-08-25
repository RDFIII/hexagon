class Polygondwana {
	constructor(x, y, radius, npoints) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.npoints = npoints;
	}

	show() {
		noStroke();
		fill(0, 163, 204);

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
