class JetPack {
  constructor() {
    this.x = 350;
    this.y = 400;
    this.h = 90;
    this.w = 90;
    this.speed = 2.5;
    this.jumpspeed = 60;
    this.moveSpeed = 25;

    this.img = new Image();
    this.img.src = "../Images/jet-pack-play-again.png";
  }

  drawJet = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  gravityJet = () => {
    if (this.y < canvas.clientHeight - this.h) {
      this.y += this.speed;
    }
  };

  movejetRight = () => {
    this.x += this.moveSpeed;
  };
  movejetLeft = () => {
    this.x -= this.moveSpeed;
  };
  // moveJetDown =()=>{
  //   this.y += this.moveSpeed;
  // }

  jumpJet = () => {
    this.y -= this.jumpspeed;
  };
}
