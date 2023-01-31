class Explosion {

constructor(){


    this.w = 90;
    this.h = 90;
    this.img = new Image()
    this.img.src = "../Images/explosion.png"

}

//methode

drawExplosion =(xPos, yPos)=>{
    ctx.drawImage(this.img, xPos, yPos, this.w, this.h);
}

}