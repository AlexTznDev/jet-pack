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
    this.img.src = "./Images/jet-pack-play-again.png";
    this.imgDied = new Image();
    this.imgDied.src = "./Images/jet-pack-died.png";

    this.imgBublle5 = new Image();
    this.imgBublle5.src = "./Images/bubbles/jet-pack-bubble-5.png";

    this.imgBublle4 = new Image();
    this.imgBublle4.src = "./Images/bubbles/jet-pack-bubble-4.png";

    this.imgBublle3 = new Image();
    this.imgBublle3.src = "./Images/bubbles/jet-pack-bubble-3.png";

    this.imgBublle2 = new Image();
    this.imgBublle2.src = "./Images/bubbles/jet-pack-bubble-2.png";

    this.imgBublle1 = new Image();
    this.imgBublle1.src = "./Images/bubbles/jet-pack-bubble-1.png";
  }

  drawJet = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };
  drawDiedJet = () => {
    ctx.drawImage(this.imgDied, this.x, this.y, this.w, this.h);
  };

  //all bublles draw

  drawBubbleJet1 = () => {
    ctx.drawImage(this.imgBublle1, this.x, this.y, 60, 60);
  };
  drawBubbleJet2 = () => {
    ctx.drawImage(this.imgBublle2, this.x, this.y, 60, 60);
  };
  drawBubbleJet3 = () => {
    ctx.drawImage(this.imgBublle3, this.x, this.y, 60, 60);
  };
  drawBubbleJet4 = () => {
    ctx.drawImage(this.imgBublle4, this.x, this.y, 60, 60);
  };
  drawBubbleJet5 = () => {
    ctx.drawImage(this.imgBublle5, this.x, this.y, 60, 60);
  };
  //all bublles draw fin

  gravityJet = (arg) => {
    this.y += arg;
  };

  movejetRight = () => {
    this.x += this.moveSpeed;
  };
  movejetLeft = () => {
    this.x -= this.moveSpeed;
  };

  jumpJet = () => {
    if (this.y > 0) {
      this.y -= this.jumpspeed;
    }
  };

  missileTouch = () => {
    this.moveSpeed = 0;
    this.jumpspeed = 0;
  };
}
