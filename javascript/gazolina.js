class Gazolina {
    constructor(posX) {
      this.x = posX;
      this.y = -50;
      this.h = 45;
      this.w = 30;
    //   this.speed = 2.5;
    //   this.jumpspeed = 60;
    //   this.moveSpeed = 25;
  
      this.img = new Image();
      this.img.src = "../Images/gazolina.png";
    }

    drawGazolina =()=>{

        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);

    }

    moveGazolina = () => {
        this.y += 2;
      };
  

  }
  