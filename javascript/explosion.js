class Explosion {
  constructor(arg) {
    this.w = 90;
    this.h = 90;


    if (arg === 0) {
     this.img = new Image();
     this.img.src = "./Images/explosion.png";
    } else if (arg === 1) {
      this.img = new Image();
      this.img.src = "./Images/explosion/img2.png";
    } else if (arg === 2) {
      this.img = new Image();
      this.img.src = "./Images/explosion/img3.png";
    }
  }

  //methode

  drawExplosion = (xPos, yPos) => {
    ctx.drawImage(this.img , xPos, yPos, this.w, this.h);
  };
  
}
