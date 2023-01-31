class JetPack {
  constructor() {
    this.x = 350;
    this.y = 400;
    this.h = 70;
    this.w = 50;
    this.speed = 2.5;
    this.jumpspeed = 100;
    this.moveSpeed = 25;

    this.img = new Image();
    this.img.src = "../Images/jet-pack-play-again.png";
    this.imgDied = new Image();
    this.imgDied.src = "../Images/jet-pack-died.png";
    this.imgBublle =new Image()
    this.imgBublle.src = "../Images/jet-pack-bubble.png"
  }

  drawJet = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };
  drawDiedJet = () => {
    ctx.drawImage(this.imgDied, this.x, this.y, this.w, this.h);
  };
  drawBubbleJet = () => {
    ctx.drawImage(this.imgBublle, this.x, this.y, 70, this.h);
  };

  gravityJet = (arg) => {
    
        this.y += arg;
      
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

  missileTouch = () => {
    this.moveSpeed = 0;
    this.jumpspeed = 0;
    
  };
}
