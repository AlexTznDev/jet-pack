class Diamant {
    constructor(randomX) {
      this.x = randomX;
      this.y = -10;
      this.h = 50;
      this.w = 50;
      this.img = new Image();
      this.img.src = "../Images/diamant.png";

    }
  
    drawDiamant = () => {
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    };

    moveDiamant = () =>{
        this.y += 3
    }

  }
  