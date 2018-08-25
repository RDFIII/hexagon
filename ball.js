class Ball {
  constructor(x, y, r, xV = 4, yV = -3) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.d = 2*r;
    this.xVelocity = xV;
    this.yVelocity = yV;
  }

  show(){
    fill(0, 163, 204);
    fill(179, 0, 0);
    noStroke();
    ellipse(this.x, this.y, this.d, this.d);
  }

  move(){
    this.x += this.xVelocity;
    this.y += this.yVelocity;
    this.bounce();
  }

  bounce(){
    if(this.x - this.r <= 0 || this.x + this.r >= width){
      this.xVelocity *= -1;
      sound();
    }
    if(this.y - this.r <= 0 || this.y + this.r >= height){
      this.yVelocity *= -1;
      sound();
    }
  }
}
