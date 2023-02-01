class Missile {
    //propriedas de los tubes
    constructor(yPos, xPos , ismisileright) {
      this.x =  xPos
      this.y = yPos;
      this.w = 90;
      this.h = 25;
      this.speed = 2;
      this.img = new Image();
      if(ismisileright === true){
        this.img.src = "./Images/missiles/missileGoLeft.png"
      }else {
        this.img.src = "./Images/missiles/missileToRight.png"
      }
      
       ;
      
    }
  
    //methode
  
    drawMissile = () => {
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    };
  
    // que los tubos avencen
  
    moveMissile = () => {
      this.x -= 4;
    };

    moveMissileToRight = () =>{

      this.x += 4;

    }



  }


  