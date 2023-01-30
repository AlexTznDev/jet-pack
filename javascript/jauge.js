class Jauge {
    constructor() {
      this.x = canvas.width - 260;
      this.y = 20;
      this.h = 30;
      this.w = 250;
 
  
      this.img = new Image();
      this.img.src = "../Images/jauge/jauge-1.png";

      this.img2 = new Image();
      this.img2.src = "../Images/jauge/jauge-2.png"

      this.img3 = new Image();
      this.img3.src = "../Images/jauge/jauge-3.png";

      this.img4 = new Image();
      this.img4.src = "../Images/jauge/jauge-4.png"

      this.img5 = new Image();
      this.img5.src = "../Images/jauge/jauge-'.png";

      this.img6 = new Image();
      this.img6.src = "../Images/jauge/jauge-5.png"

      this.img7 = new Image();
      this.img7.src = "../Images/jauge/jauge-6.png";

      this.img8 = new Image();
      this.img8.src = "../Images/jauge/jauge-7.png"

      this.img9 = new Image();
      this.img9.src = "../Images/jauge/jauge-8.png";

      this.img10 = new Image();
      this.img10.src = "../Images/jauge/jauge-9.png"

      this.img11 = new Image();
      this.img11.src = "../Images/jauge/jauge-10.png"
    }
  

    drawJauge1 = () => {
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    };
    drawJauge2 = () => {
      ctx.drawImage(this.img2, this.x, this.y, this.w, this.h);
    };
    drawJauge3 = () => {
      ctx.drawImage(this.img3, this.x, this.y, this.w, this.h);
    };
    drawJauge4 = () => {
      ctx.drawImage(this.img4, this.x, this.y, this.w, this.h);
    };
    drawJauge5 = () => {
      ctx.drawImage(this.img5, this.x, this.y, this.w, this.h);
    };
    drawJauge6 = () => {
      ctx.drawImage(this.img6, this.x, this.y, this.w, this.h);
    };
    drawJauge7 = () => {
      ctx.drawImage(this.img7, this.x, this.y, this.w, this.h);
    };
    drawJauge8 = () => {
      ctx.drawImage(this.img8, this.x, this.y, this.w, this.h);
    };
    drawJauge9 = () => {
      ctx.drawImage(this.img9, this.x, this.y, this.w, this.h);
    };
    drawJauge10 = () => {
      ctx.drawImage(this.img10, this.x, this.y, this.w, this.h);
    };
    drawJauge11 = () => {
      ctx.drawImage(this.img11, this.x, this.y, this.w, this.h);
    };

  }
  