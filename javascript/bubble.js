class Bubble {
    constructor(posX) {
    
      this.x = posX;
      this.y = -50;
      this.h = 40;
      this.w = 40;
      this.speed = 2.5;

  
      this.img = new Image();
      this.img.src = "../Images/bubble.png";

    }
  
    drawBubble = () => {
        
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    };
    moveBubble = () => {
        this.y += 3.5;
      };

  }
  