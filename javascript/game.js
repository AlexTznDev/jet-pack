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
    this.gazolinaArr = [];
    this.countTimer = 10;

    this.missileSeparation = 300;
    // this.score = 1;
    //colission con el tubo
    //colision con el suelo
    // que los tubos apaecen y desaparecen
    // game over
    // pause btn
  }


  countTimer = () => {
    this.countTimer--
  }
  gameOver = () => {
    this.isGameon = false;

    canvas.style.display = "none";

    gameOverScrreenDOM.style.display = "flex";
  };

  // checkTimer = () => {
  //   setTimeout(() => {
  //     this.gameOver();
  //   }, 10000);
  // };

  checkColition = () => {
    this.missileArr.forEach((eachMisile) => {
      if (
        eachMisile.x < this.jetPack.x + this.jetPack.w &&
        eachMisile.x + eachMisile.w > this.jetPack.x &&
        eachMisile.y < this.jetPack.y + this.jetPack.h &&
        eachMisile.h + eachMisile.y > this.jetPack.y
      ) {
        // Collision detected!
        this.gameOver();
      }
    });
    this.missileArrLeft.forEach((eachMisile) => {
      if (
        eachMisile.x < this.jetPack.x + this.jetPack.w &&
        eachMisile.x + eachMisile.w > this.jetPack.x &&
        eachMisile.y < this.jetPack.y + this.jetPack.h &&
        eachMisile.h + eachMisile.y > this.jetPack.y
      ) {
        // Collision detected!
        this.gameOver();
      }
    });
  };

  drawBg = () => {
    //image background
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
  };

  misileApparecenRight = () => {
    if (this.missileArr.length === 0 || this.frame % 120 === 0) {
      let randomPosY = Math.random() * canvas.height + 150;
      let missileRight = new Missile(randomPosY, canvas.width + 200, true);
      this.missileArr.push(missileRight);
    }
  };

  misileApparecenLeft = () => {
    if (this.missileArr.length === 0 || this.frame % 120 === 0) {
      let randomPosY = Math.random() * canvas.height + 150;
      let missileRight = new Missile(randomPosY, -200, false);
      this.missileArrLeft.push(missileRight);
    }
  };

  gazolinaApparence = () => {
    if (this.gazolinaArr.length === 0 || this.frame % 420 === 0) {
      let randomPosXgaz = Math.random() * canvas.width;
      this.gazolina = new Gazolina(randomPosXgaz);
      this.gazolinaArr.push(this.gazolina);
    }
  };

  gazolinaColition = () => {
    this.gazolinaArr.forEach((eachGazolina) => {
      if (
        eachGazolina.x < this.jetPack.x + this.jetPack.w &&
        eachGazolina.x + eachGazolina.w > this.jetPack.x &&
        eachGazolina.y < this.jetPack.y + this.jetPack.h &&
        eachGazolina.h + eachGazolina.y > this.jetPack.y
      ) {
        // Collision detected!
        console.log("hello");
      }
    });
  };

  gameLoop = () => {
    this.frame++;
    // 1.limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. movimientos y acciones de todos los elementos
    this.jetPack.gravityJet();
    this.checkColition();
    this.gazolinaColition();


    
     
    this.missileArr.forEach((eachMisile) => {
      eachMisile.moveMissile();
    });

    this.missileArrLeft.forEach((eachMisile) => {
      eachMisile.moveMissileToRight();
    });

    this.gazolinaArr.forEach((eachGazolina) => {
      eachGazolina.moveGazolina();
    });

    this.gazolinaApparence();
    this.misileApparecenLeft();
    this.misileApparecenRight();
    // 3. dibujado de los elementos
    this.drawBg();

    this.missileArr.forEach((eachMisile) => {
      eachMisile.drawMissile();
    });
    this.missileArrLeft.forEach((eachMisile) => {
      eachMisile.drawMissile();
    });
    this.gazolinaArr.forEach((eachGazolina) => {
      eachGazolina.drawGazolina();
    });

    this.jetPack.drawJet();

    if (this.isGameon === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
