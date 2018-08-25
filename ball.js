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
    fill(2, 9, 20);
    noStroke();
    ellipse(this.x, this.y, this.d, this.d);
  }

  move(){
      this.x += this.xVelocity;
      this.y += this.yVelocity;
      this.bounce();
    }

    bounce(){
    if(this.x - this.r <= 0 || this.x + this.r >= windowWidth){
      this.xVelocity *= -1;
      // sound();
      console.log("contact");
    }
    if(this.y - this.r <= 0 || this.y + this.r >= windowHeight){
      this.yVelocity *= -1;
      // sound();
      console.log("contact");
    }
  }
}
