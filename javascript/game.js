class Game {
  // propiedades

  constructor() {
    this.bg = new Image();
    this.bg.src = "../Images/bg.jpg";
    this.jetPack = new JetPack();
    this.frame = 1; // quantité de frame passé dans le jeux
    this.isGameon = true;
    this.missileArr = [];
    this.missileArrLeft = [];

    this.missileSeparation = 300;
    this.score = 1;
    //colission con el tubo
    //colision con el suelo
    // que los tubos apaecen y desaparecen
    // game over
    // pause btn
  }

  drawBg = () => {
    //image background
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
  };

  misileApparecenRight = () => {
    if (
      this.missileArr.length === 0 || this.frame % 120 === 0 && this.score === 1
    ) {
      let randomPosY = Math.random() * canvas.height + 150;
      let missileRight = new Missile(randomPosY, canvas.width + 200, true);
      this.missileArr.push(missileRight);
    }
  };

  misileApparecenLeft = () => {
    if (
      this.missileArr.length === 0 || this.frame % 120 === 0 && this.score === 1
    ) {
      let randomPosY = Math.random() * canvas.height + 150;
      let missileRight = new Missile(randomPosY, -200 , false);
      this.missileArrLeft.push(missileRight);
    }
  };

  gameLoop = () => {
    this.frame++;
    // 1.limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. movimientos y acciones de todos los elementos
    this.jetPack.gravityJet();

    this.missileArr.forEach((eachMisile) => {
      eachMisile.moveMissile();
    });
    this.missileArrLeft.forEach((eachMisile) => {
        eachMisile.moveMissileToRight();
    });




    this.misileApparecenLeft();
    this.misileApparecenRight();
    // 3. dibujado de los elementos
    this.drawBg();

    this.missileArr.forEach((eachMisile) => {
        eachMisile.drawMissile();
    });
    this.missileArrLeft.forEach((eachMisile)=>{

        eachMisile.drawMissile()

    })

    this.jetPack.drawJet();

    if (this.isGameon === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
