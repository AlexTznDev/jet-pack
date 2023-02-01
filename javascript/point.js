class Points {
    constructor(randomX) {
      this.x = randomX;
      this.y = -10;
      this.h = 35;
      this.w = 35;
    //   this.speed = 2.5;
    //   this.jumpspeed = 60;
    //   this.moveSpeed = 25; 
      this.img = new Image();
      this.img.src = "./Images/coins.png";

    }
  
    drawPoint = () => {
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    };

    movePoint = () =>{
        this.y += 3
    }

  }
  