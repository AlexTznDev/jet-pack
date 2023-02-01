class More2 {
  constructor() {
    this.w = 35;
    this.h = 30;
    this.img = new Image();
    this.img.src = "./Images/+2.png";
  }

  drawTwoPoint = (xPos, yPos) => {
    ctx.drawImage(this.img, xPos, yPos, this.w, this.h);
  };


}
