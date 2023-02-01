class More20 {
    constructor() {
      this.w = 45;
      this.h = 30;
      this.img = new Image();
      this.img.src = "./Images/+20.png";
    }
  
    drawTwentyPoint = (xPos, yPos) => {
      ctx.drawImage(this.img, xPos, yPos, this.w, this.h);
    };
  
  }
  