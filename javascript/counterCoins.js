class CounterCoins {
    constructor() {
      this.x = canvas.width - 180;
      this.y = 5;
      this.h = 200;
      this.w = 200;
  
      this.img = new Image();
      this.img.src = "../Images/coinsCount.png";

    }
  
    drawCounter = () => {
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    };


  }
  